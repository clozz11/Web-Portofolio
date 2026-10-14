"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Star, GitFork, ExternalLink, BookOpen, Users, UserCheck } from "lucide-react";

interface GHRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
  updated_at: string;
  fork: boolean;
}

interface GHUser {
  login: string;
  avatar_url: string;
  name: string | null;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
  html_url: string;
}

const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript:  "#3178c6",
  JavaScript:  "#f1e05a",
  Python:      "#3572A5",
  CSS:         "#563d7c",
  HTML:        "#e34c26",
  Java:        "#b07219",
  Go:          "#00ADD8",
  Rust:        "#dea584",
  Shell:       "#89e051",
  C:           "#555555",
  "C++":       "#f34b7d",
  PHP:         "#4F5D95",
};

const GITHUB_USERNAME = "clozz11";
const GITHUB_URL      = `https://github.com/${GITHUB_USERNAME}`;

export default function GitHubProfile() {
  const [user,  setUser]  = useState<GHUser | null>(null);
  const [repos, setRepos] = useState<GHRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const headers = { "Accept": "application/vnd.github.v3+json" };

    Promise.all([
      fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, { headers }),
      fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`, { headers }),
    ])
      .then(async ([uRes, rRes]) => {
        if (uRes.ok) setUser(await uRes.json());
        if (rRes.ok) {
          const all: GHRepo[] = await rRes.json();
          // Filter forked repos, show up to 4 originals
          setRepos(all.filter((r) => !r.fork).slice(0, 4));
        }
      })
      .catch(() => {/* silently fail — card hidden if API fails */})
      .finally(() => setLoading(false));
  }, []);

  // Don't render if loading failed completely
  if (!loading && !user) return null;

  return (
    <div className="mt-10 reveal-on-scroll delay-3">
      {/* ── Header label ── */}
      <div className="flex items-center gap-3 mb-5">
        <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
          <path d="M9 18c-4.51 2-5-2-7-2"/>
        </svg>
        <span className="text-xs font-extrabold uppercase tracking-[0.3em] text-green-400">
          GitHub Profile
        </span>
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noreferrer"
          className="ml-auto text-xs text-slate-500 hover:text-green-400 flex items-center gap-1 transition-colors"
        >
          View on GitHub <ExternalLink className="w-3 h-3" />
        </a>
      </div>

      {/* ── Skeleton while loading ── */}
      {loading && (
        <div className="p-6 rounded-3xl card-glow animate-pulse space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-white/8" />
            <div className="space-y-2 flex-1">
              <div className="h-4 bg-white/8 rounded w-32" />
              <div className="h-3 bg-white/5 rounded w-48" />
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-16 bg-white/5 rounded-2xl" />
            ))}
          </div>
        </div>
      )}

      {/* ── Profile Card ── */}
      {!loading && user && (
        <div className="p-5 sm:p-7 rounded-3xl card-glow overflow-hidden relative">
          {/* Subtle glow */}
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-green-400/4 blur-3xl pointer-events-none" />

          {/* User row */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
            <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="flex-shrink-0">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-green-400/30 hover:border-green-400/60 transition-all duration-300"
                   style={{ boxShadow: "0 0 20px rgba(0,232,122,0.15)" }}>
                <Image
                  src={user.avatar_url}
                  alt={user.login}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </a>

            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="text-lg sm:text-xl font-extrabold text-white font-heading hover:text-green-400 transition-colors duration-200"
                >
                  {user.name ?? user.login}
                </a>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-green-400/10 border border-green-400/20 text-green-400 font-semibold">
                  @{user.login}
                </span>
              </div>
              {user.bio && (
                <p className="text-sm text-slate-400 mt-1 leading-relaxed line-clamp-2">{user.bio}</p>
              )}
              {/* Stats */}
              <div className="flex flex-wrap items-center gap-4 mt-3">
                <span className="flex items-center gap-1.5 text-xs text-slate-500">
                  <BookOpen className="w-3.5 h-3.5 text-green-400/60" />
                  <span className="text-white font-bold">{user.public_repos}</span> repos
                </span>
                <span className="flex items-center gap-1.5 text-xs text-slate-500">
                  <Users className="w-3.5 h-3.5 text-green-400/60" />
                  <span className="text-white font-bold">{user.followers}</span> followers
                </span>
                <span className="flex items-center gap-1.5 text-xs text-slate-500">
                  <UserCheck className="w-3.5 h-3.5 text-green-400/60" />
                  <span className="text-white font-bold">{user.following}</span> following
                </span>
              </div>
            </div>

            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="self-start sm:self-center flex-shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-green-400/25 bg-green-400/5 text-green-400 text-xs font-bold hover:bg-green-400/10 hover:border-green-400/40 transition-all duration-200"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                <path d="M9 18c-4.51 2-5-2-7-2"/>
              </svg>
              View Profile
            </a>
          </div>

          {/* Repos grid */}
          {repos.length > 0 && (
            <>
              <p className="text-[11px] font-extrabold uppercase tracking-[0.3em] text-slate-600 mb-3">
                Recent Repositories
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {repos.map((repo) => (
                  <a
                    key={repo.id}
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="group/repo p-4 rounded-2xl border border-white/6 bg-white/2 hover:border-green-400/25 hover:bg-green-400/4 transition-all duration-200"
                  >
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <span className="text-sm font-bold text-white group-hover/repo:text-green-400 transition-colors duration-200 truncate">
                        {repo.name}
                      </span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-600 group-hover/repo:text-green-400 shrink-0 transition-colors" />
                    </div>

                    {repo.description && (
                      <p className="text-xs text-slate-500 leading-relaxed line-clamp-2 mb-3">
                        {repo.description}
                      </p>
                    )}

                    <div className="flex items-center gap-3 mt-auto">
                      {repo.language && (
                        <span className="flex items-center gap-1.5 text-xs text-slate-500">
                          <span
                            className="w-2.5 h-2.5 rounded-full"
                            style={{ background: LANGUAGE_COLORS[repo.language] ?? "#8b949e" }}
                          />
                          {repo.language}
                        </span>
                      )}
                      {repo.stargazers_count > 0 && (
                        <span className="flex items-center gap-1 text-xs text-slate-600">
                          <Star className="w-3 h-3" /> {repo.stargazers_count}
                        </span>
                      )}
                      {repo.forks_count > 0 && (
                        <span className="flex items-center gap-1 text-xs text-slate-600">
                          <GitFork className="w-3 h-3" /> {repo.forks_count}
                        </span>
                      )}
                    </div>
                  </a>
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
