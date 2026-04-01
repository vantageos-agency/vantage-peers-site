# VantagePeers — New Positioning Copy (v2)

> Repositioned from "Agent Memory" to "Agent Operating System"
> Date: 2026-03-28
> Status: DRAFT — English only. French translation to follow separately.

---

## 1. Tagline Options

### Option A (recommended)
**The operating system for AI agent teams.**

### Option B
**Multi-agent orchestration. Open source. One backend.**

### Option C
**Where AI agents coordinate. Memory. Tasks. Messages. Missions.**

---

## 2. Hero Section

### Badge
`Open Source — MIT License`

### Headline
**The operating system for AI agent teams.**

### Subheadline
VantagePeers is the open-source backend that gives your Claude Code agents shared memory, cross-machine messaging, task coordination, and mission planning — in one Convex deployment. No SaaS. No vendor lock-in. No monthly bill.

### Hero Stats (4 pills)
| Value | Label |
|-------|-------|
| 10 | Database Tables |
| 37 | MCP Tools |
| Free | MIT License |
| <10 min | Setup Time |

### Primary CTA
**View on GitHub**

### Secondary CTA
**See How It Works**

---

## 3. Problem Section

### Title
**You are duct-taping your agent infrastructure.**

### Subtitle
Memory in one service. Tasks in another. Messaging hacked together with files. Scheduling? Manual. Your agents need an integrated backend, not five disconnected tools.

### Problem Cards (4)

**1. Memory-only tools are not enough**
mem0 and Zep give you memory — and nothing else. No tasks, no messaging, no coordination. You still need to build everything around it.

**2. SaaS pricing does not scale**
$249/month for graph memory. $475/month for managed context. Your agent infrastructure should not cost more than your LLM calls.

**3. Local hacks break at scale**
SQLite files and JSON dumps work on one machine. Add a second agent, a second machine, a team of agents — and everything falls apart. No sync. No receipts. No coordination.

**4. No single tool does all of it**
You need memory + messaging + tasks + scheduling + diary + briefings. Today that means 5-6 separate tools, 5-6 integration points, 5-6 failure modes.

### Closing Line
You do not need another memory plugin. You need an agent OS.

---

## 4. Features Section (10 features)

### Section Title
**Everything your agents need. One backend.**

### Section Subtitle
10 database tables. 37 MCP tools. Seven capability categories. All the primitives for running a coordinated AI agent team across machines.

### Features

**1. Semantic Memory**
Icon: `Brain` (lucide)
Store typed memories — user profiles, feedback, project context, references, and episodes. Recall by meaning with vector embeddings and hybrid search. Namespace per project.

**2. Cross-Machine Messaging**
Icon: `MessageSquare` (lucide)
Agents send messages across machines with channel routing, instance targeting, and read receipts. Broadcast to all. DM one role. Target a specific instance. No polling.

**3. Task Coordination**
Icon: `CheckSquare` (lucide)
Assign tasks between agents with priority levels, deadlines, dependencies, blockers, and completion notes. Owner-only RBAC. Full audit trail from creation to done.

**4. Mission Planning**
Icon: `Target` (lucide)
Group tasks into missions with lifecycle stages: brainstorm, plan, execute, validate, complete. Track progress across agents. Assign a pilot. Set target dates.

**5. Recurring Automation**
Icon: `Clock` (lucide)
Define recurring tasks with cron expressions. Daily standups, weekly scans, monthly reviews — auto-created on schedule. Never forget a routine again.

**6. Memory Graph**
Icon: `GitBranch` (lucide)
Link memories with typed relations: updates, extends, derives. Superseded memories auto-archive. Build institutional knowledge that evolves, not just accumulates.

**7. Agent Profiles**
Icon: `Users` (lucide)
Each agent instance gets a profile with static identity (role, workspace, capabilities) and dynamic state (current task, last seen, session count). Know who is doing what, right now.

**8. Session Diary**
Icon: `BookOpen` (lucide)
Agents write daily diary entries with highlights and blockers. Persistent across sessions. Review what happened yesterday before starting today.

**9. Briefing Notes**
Icon: `FileText` (lucide)
Structured briefing documents with topics, participants, decisions, and linked memories. The institutional record of what was discussed and decided.

**10. Component Registry**
Icon: `Layers` (lucide)
Register agents, skills, hooks, and plugins with full content backup. Your agent team's capability inventory — versioned and searchable.

---

## 5. Comparison Table — Repositioned

### Section Title
**Stop stitching together 6 tools.**

### Section Subtitle
VantagePeers replaces the stack you were going to build. One backend. One deployment. One MCP config.

### Table: VantagePeers vs. The Alternative

| Capability | Build It Yourself | Existing Tools | VantagePeers |
|---|---|---|---|
| **Category** | DIY Stack | mem0 / Zep / etc. | Agent Operating System |
| Semantic memory | Custom vector DB setup | mem0: $249/mo, Zep: $475/mo | Included (MIT) |
| Graph relations | Manual schema + queries | mem0 Enterprise only | Included |
| Cross-machine messaging | Custom pub/sub + infra | Not available | Included |
| Read receipts | Custom implementation | Not available | Included |
| Task management | Jira/Linear API glue | Not available | Included |
| Task dependencies | Custom DAG logic | Not available | Included |
| Recurring tasks (cron) | Custom scheduler | Not available | Included |
| Mission planning | Custom project layer | Not available | Included |
| Agent profiles + state | Custom DB tables | Not available | Included |
| Session diary | Custom logging | Not available | Included |
| Briefing notes | Google Docs / Notion | Not available | Included |
| Component registry | File system + README | Not available | Included |
| MCP native | Custom tool wrappers | Partial (mem0 only) | 37 tools, 7 categories |
| Self-hosted | Your responsibility | Cloud-only or abandoned | Convex (free tier) |
| Open source | N/A | Partial or closed | MIT License |
| **Setup time** | Weeks | Hours + $$$ | < 10 minutes |
| **Monthly cost** | Infrastructure + time | $249-475+ /month | $0 |

### Notes
- mem0 graph memory requires Enterprise tier at $249/mo.
- Zep Community Edition is no longer maintained as of 2024.
- "Build It Yourself" assumes Postgres + Redis + custom code for each capability.

---

## 6. How It Works (3 Steps)

### Section Title
**Running in under 10 minutes.**

### Section Subtitle
Three steps from zero to a fully coordinated agent operating system.

### Step 01: Deploy
Icon: `Rocket` (lucide)
Clone the repo. Run `npx convex deploy`. Your 10-table backend is live — memory, messaging, tasks, missions, diary, and more. One command. No infrastructure to manage.

### Step 02: Connect
Icon: `Plug` (lucide)
Add VantagePeers as an MCP server in your Claude Code config. Each agent gets an orchestrator ID and instance name. Namespaces isolate projects. No schema migration needed.

### Step 03: Orchestrate
Icon: `Network` (lucide)
Your agents store memories, send messages, assign tasks, plan missions, and write diaries — all through 37 MCP tools. Works across machines. Across sessions. Across agent teams.

### Emphasis Box
Powered by Convex — real-time database with built-in vector search, serverless functions, and zero-config scaling. Your infrastructure, their uptime.

---

## 7. CTA Section (Bottom)

### Title
**Your agents. Your infrastructure. Zero monthly bill.**

### Subtitle
Open source. MIT license. Deploy in under 10 minutes. Start coordinating.

### Primary CTA
**Star on GitHub**

### Secondary CTA
**Read the Docs**

### Note
No account required. No credit card. Clone, deploy, orchestrate.

---

## 8. Updated FAQ Suggestions

**Q: Is VantagePeers a memory tool?**
A: It started as one. Now it is a complete agent operating system — memory is one of 10 capabilities. It also handles messaging, tasks, missions, recurring automation, diary, briefings, agent profiles, and a component registry. Memory is table 1 of 10.

**Q: What makes this different from mem0 or Zep?**
A: mem0 and Zep are memory-only tools. VantagePeers is an agent OS. They give you memory storage and retrieval. VantagePeers gives you memory + messaging + task coordination + mission planning + recurring automation + session diary + briefing notes + agent profiles + a component registry — all in one backend, all via MCP, all open source.

**Q: Is VantagePeers really free?**
A: Yes. MIT license. Clone the repo, deploy to your Convex account (generous free tier), and you are running. No subscription. No usage fees. No enterprise tier required for any feature.

**Q: Can I use this with agents other than Claude?**
A: VantagePeers exposes 37 MCP tools. Any MCP-compatible agent can use them. Claude Code is the primary use case because of its native MCP support, but the protocol is open.

**Q: What is Convex?**
A: Convex is a real-time backend platform — database, serverless functions, vector search, and scheduling in one service. VantagePeers uses it as its runtime. You deploy once with `npx convex deploy` and Convex handles scaling, backups, and uptime. The free tier covers most agent setups.

---

## 9. Messaging Framework (Internal Reference)

### Old Positioning
- Category: Agent Memory
- Tagline: "Persistent memory for AI agents. Finally free."
- Comparison set: mem0, Zep, claude-peers
- Angle: cheaper alternative to paid memory tools

### New Positioning
- Category: Agent Operating System
- Tagline: "The operating system for AI agent teams."
- Comparison set: building it yourself, fragmented tool stacks
- Angle: the only integrated backend for multi-agent orchestration — and it is free

### Key Messages (priority order)
1. **Complete, not partial.** 10 tables, 37 tools, 7 categories. Not just memory — the full stack.
2. **Open source, zero cost.** MIT license. Self-hosted on Convex free tier. No SaaS pricing trap.
3. **Built for multi-agent teams.** Messaging with receipts. Tasks with dependencies. Missions with lifecycle. Not single-agent memory.
4. **10-minute setup.** One deploy command. One MCP config. Production-ready.
5. **No lock-in.** Open schema. Exportable data. Documented protocol. Switch backends if you want.
