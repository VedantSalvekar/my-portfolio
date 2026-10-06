import { useEffect, useMemo, useState } from "react";

const GITHUB_USER = "VedantSalvekar";
const LEETCODE_USER = "Vedant_1028";

/** Space between GitHub and LeetCode. Change this to adjust (e.g. "3rem", "5rem", "8rem"). */
const SECTION_GAP = "5rem";

const LEVEL_COLORS = [
  "#112240",
  "rgba(100, 255, 218, 0.25)",
  "rgba(100, 255, 218, 0.45)",
  "rgba(100, 255, 218, 0.7)",
  "#64ffda",
];

function levelFromCount(count) {
  if (count <= 0) return 0;
  if (count === 1) return 1;
  if (count <= 3) return 2;
  if (count <= 6) return 3;
  return 4;
}

function formatActivityDate(date) {
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function dateKey(date) {
  return date.toISOString().slice(0, 10);
}

/** Build LeetCode submission days as a week×day grid (UTC). */
function buildLeetcodeWeeks(calendar, weeksCount = 54) {
  const map = calendar ?? {};
  const now = new Date();
  const todayUtc = Date.UTC(
    now.getUTCFullYear(),
    now.getUTCMonth(),
    now.getUTCDate(),
  );
  const dayOfWeek = new Date(todayUtc).getUTCDay();
  const startUtc =
    todayUtc - dayOfWeek * 86400000 - (weeksCount - 1) * 7 * 86400000;

  const days = [];
  for (let i = 0; i < weeksCount * 7; i++) {
    const utcMs = startUtc + i * 86400000;
    const key = String(Math.floor(utcMs / 1000));
    const count = Number(map[key] ?? 0);
    days.push({
      date: new Date(utcMs).toISOString().slice(0, 10),
      count,
      level: levelFromCount(count),
      future: utcMs > todayUtc,
    });
  }

  const weeks = [];
  for (let i = 0; i < days.length; i += 7) {
    weeks.push(days.slice(i, i + 7));
  }
  return weeks;
}

function groupCommitsByDay(commits) {
  const groups = [];
  const map = new Map();

  for (const commit of commits) {
    const key = dateKey(commit.date);
    if (!map.has(key)) {
      const group = { key, date: commit.date, commits: [] };
      map.set(key, group);
      groups.push(group);
    }
    map.get(key).commits.push(commit);
  }

  return groups;
}

function Activity() {
  const [commits, setCommits] = useState([]);
  const [calendar, setCalendar] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const [commitsRes, leetcodeRes] = await Promise.all([
          fetch(
            `https://api.github.com/search/commits?q=author:${GITHUB_USER}&sort=author-date&order=desc&per_page=8`,
            {
              headers: {
                Accept: "application/vnd.github+json",
              },
            },
          ),
          fetch(
            `https://leetcode-api-faisalshohag.vercel.app/${LEETCODE_USER}`,
          ),
        ]);

        const commitsData = commitsRes.ok ? await commitsRes.json() : null;
        const leetcodeData = leetcodeRes.ok ? await leetcodeRes.json() : null;

        if (cancelled) return;

        const parsed = (commitsData?.items ?? []).map((item) => ({
          id: item.sha,
          message: item.commit.message.split("\n")[0],
          repo: item.repository?.name ?? item.repository?.full_name,
          repoFull: item.repository?.full_name,
          url: item.html_url,
          date: new Date(item.commit.author.date),
        }));

        setCommits(parsed);
        setCalendar(leetcodeData?.submissionCalendar ?? {});
      } catch {
        // Stay quiet if APIs fail
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  const weeks = useMemo(() => buildLeetcodeWeeks(calendar, 46), [calendar]);
  const groups = useMemo(
    () => groupCommitsByDay(commits).slice(0, 3),
    [commits],
  );

  return (
    <div
      className="text-left w-full min-w-0 flex flex-col gap-8 md:gap-[var(--activity-section-gap)] pt-1"
      style={{ "--activity-section-gap": SECTION_GAP }}
    >
      {/* GitHub — top */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <p className="text-xs font-medium" style={{ color: "#ccd6f6" }}>
            Contribution activity
          </p>
          <a
            href={`https://github.com/${GITHUB_USER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] uppercase tracking-wider transition-colors"
            style={{ color: "#8892b0" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#64ffda")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#8892b0")}
          >
            GitHub
          </a>
        </div>

        {loading && (
          <div className="space-y-3">
            {[0, 1].map((i) => (
              <div
                key={i}
                className="h-12 animate-pulse"
                style={{ backgroundColor: "#112240" }}
              />
            ))}
          </div>
        )}

        {!loading && groups.length === 0 && (
          <p className="text-xs" style={{ color: "#8892b0" }}>
            No recent public commits.
          </p>
        )}

        {!loading && groups.length > 0 && (
          <div className="relative pl-5 space-y-4">
            <div
              className="absolute left-[5px] top-1 bottom-1 w-px"
              style={{ backgroundColor: "#233554" }}
            />

            {groups.map((group) => {
              const byRepo = group.commits.reduce((acc, c) => {
                acc[c.repoFull] = acc[c.repoFull] || [];
                acc[c.repoFull].push(c);
                return acc;
              }, {});
              const repoEntries = Object.entries(byRepo);

              return (
                <div key={group.key} className="relative">
                  <div
                    className="absolute -left-4 top-1.5 w-2.5 h-2.5 rounded-full border"
                    style={{
                      borderColor: "#64ffda",
                      backgroundColor: "#020c1b",
                    }}
                  />

                  <p
                    className="text-[10px] mb-1.5"
                    style={{ color: "#8892b0" }}
                  >
                    {formatActivityDate(group.date)}
                  </p>

                  {repoEntries.map(([repoFull, repoCommits]) => (
                    <div key={repoFull} className="mb-2 last:mb-0">
                      <div className="flex items-start justify-between gap-2 sm:gap-3">
                        <div className="min-w-0 flex-1">
                          <p className="text-xs" style={{ color: "#ccd6f6" }}>
                            Created {repoCommits.length} commit
                            {repoCommits.length === 1 ? "" : "s"} in 1
                            repository
                          </p>
                          <a
                            href={`https://github.com/${repoFull}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs transition-colors break-words md:truncate block"
                            style={{ color: "#64ffda" }}
                          >
                            {repoFull}
                          </a>
                          <a
                            href={repoCommits[0].url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[11px] mt-1 block break-words md:truncate transition-opacity hover:opacity-80"
                            style={{ color: "#8892b0" }}
                          >
                            {repoCommits[0].message}
                          </a>
                        </div>
                        <div className="flex items-center gap-2 shrink-0 whitespace-nowrap pt-0.5">
                          <span
                            className="text-[10px]"
                            style={{ color: "#8892b0" }}
                          >
                            {repoCommits.length} commit
                            {repoCommits.length === 1 ? "" : "s"}
                          </span>
                          <div
                            className="h-1.5 rounded-sm"
                            style={{
                              width: `${Math.min(repoCommits.length * 14, 42)}px`,
                              backgroundColor: "#64ffda",
                              opacity: 0.7,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* LeetCode — bottom */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <p className="text-xs font-medium" style={{ color: "#ccd6f6" }}>
            LeetCode
          </p>
          <a
            href={`https://leetcode.com/u/${LEETCODE_USER}/`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] uppercase tracking-wider transition-colors"
            style={{ color: "#8892b0" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#64ffda")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#8892b0")}
          >
            Profile
          </a>
        </div>
        <div className="w-full min-w-0 md:overflow-x-auto">
          {loading ? (
            <div
              className="h-14 w-full animate-pulse"
              style={{ backgroundColor: "#112240" }}
            />
          ) : (
            <div
              className="grid w-full gap-0.5 md:inline-flex md:w-auto"
              style={{
                gridTemplateColumns: `repeat(${weeks.length}, minmax(0, 1fr))`,
              }}
            >
              {weeks.map((week, wi) => (
                <div key={wi} className="min-w-0 flex flex-col gap-0.5">
                  {week.map((day) => (
                    <div
                      key={day.date}
                      title={
                        day.future
                          ? ""
                          : `${day.date}: ${day.count} submission${day.count === 1 ? "" : "s"}`
                      }
                      className="w-full aspect-square md:w-2.5 md:h-2.5"
                      style={{
                        backgroundColor: day.future
                          ? "transparent"
                          : LEVEL_COLORS[day.level],
                      }}
                    />
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Activity;
