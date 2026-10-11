import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  BranchIcon,
  CacheIcon,
  LayersIcon,
  MergeIcon,
  MeterIcon,
} from "@/components/Icons";

export const metadata: Metadata = {
  title: "Workspace platform",
  description:
    "A workspace platform for agent work: branchable, shareable, durable state on top of object storage, PostgreSQL, and the compute you already run.",
};

const services = [
  {
    number: "01",
    icon: BranchIcon,
    name: "Workspace Control Plane",
    gets: "Create, fork, checkpoint, restore, and delete a workspace without losing the lineage.",
    detail:
      "Stable IDs, versions, parent-child links, and a clear lifecycle from first write to deletion.",
    differentiator: false,
  },
  {
    number: "02",
    icon: LayersIcon,
    name: "Content-Addressed Storage Engine",
    gets: "The same bytes stored once, even when versions and branches multiply.",
    detail:
      "Immutable hash-addressed chunks, manifests, a version graph, and garbage collection for what nothing still points to.",
    differentiator: false,
  },
  {
    number: "03",
    icon: MergeIcon,
    name: "Workspace Consistency and Merge",
    gets: "Two agents can work apart. A conflict is named before anyone’s work is silently overwritten.",
    detail:
      "Isolated branches, conflict detection, atomic publication, and version preconditions on every publish.",
    differentiator: true,
  },
  {
    number: "04",
    icon: CacheIcon,
    name: "Local Cache and Filesystem Client",
    gets: "Agents keep using ordinary file operations. The hot files stay close.",
    detail:
      "A filesystem client with a hot-file cache, efficient upload, cache coherence, and an optional FUSE mount.",
    differentiator: false,
  },
  {
    number: "05",
    icon: MeterIcon,
    name: "Reliability and Cost Control Plane",
    gets: "You can see what a workspace costs, and recover it when a run stops.",
    detail:
      "Abandoned workspaces, storage amplification, checkpoint checks, recovery, cost per workspace and task, quotas, and metering.",
    differentiator: false,
  },
];

const infrastructure = [
  {
    piece: "Object storage",
    use: "S3 or GCS holds the chunks.",
  },
  {
    piece: "PostgreSQL",
    use: "Metadata and the transactions that publish a version.",
  },
  {
    piece: "Redis",
    use: "Optional cache, coordination, and rate limits. Never the authoritative filesystem.",
  },
  {
    piece: "Compute",
    use: "Kubernetes, or a sandbox provider you already use, runs the agents and mounts the client.",
  },
];

const architecture = [
  {
    title: "Agent SDK and filesystem client",
    text: "POSIX-style access, the workspace API, and a local cache.",
  },
  {
    title: "Metadata and consistency",
    text: "Fork, commit, conflict detection, checkpoint, and recovery.",
  },
  {
    title: "PostgreSQL and object storage",
    text: "The version graph in the database. The bytes in object storage.",
  },
];

const firstBuild = [
  {
    number: "01",
    title: "Workspace versioning",
    text: "Create a workspace, fork it cheaply, commit, and restore a checkpoint.",
  },
  {
    number: "02",
    title: "Concurrent-agent correctness",
    text: "Two agents work independently. Conflicts are detected instead of overwritten.",
  },
  {
    number: "03",
    title: "A benchmark suite",
    text: "Measured against Git worktrees, Redis Agent Filesystem, and ordinary shared volumes.",
  },
];

export default function PlatformPage() {
  return (
    <main>
      <section className="ruled border-b border-line">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-xs tracking-[0.2em] text-saffron uppercase">
              Workspace platform
            </p>
            <h1 className="mt-4 max-w-3xl font-serif text-5xl leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
              Agent workspaces that branch, share, and last.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
              The product owns the workspace: branchable, shareable, durable,
              and efficient. Agents keep writing files. This system keeps the
              versions honest. It is not a new AWS, a new Kubernetes, or a POSIX
              kernel.
            </p>
            <Link
              href="/contact?interest=workspace"
              className="mt-8 inline-flex rounded-full bg-forest px-5 py-3 text-sm text-paper hover:bg-[#1c4a3d]"
            >
              Talk about a workspace
            </Link>
          </div>
          <figure className="group overflow-hidden rounded-3xl bg-forest">
            <Image
              src="/workspace-graph.jpg"
              alt="A version graph that forks from one highlighted point into several branches"
              width={1600}
              height={900}
              priority
              className="h-72 w-full object-cover transition duration-700 ease-out group-hover:scale-105 sm:h-96"
            />
          </figure>
        </div>
      </section>

      <section className="border-b border-line" aria-labelledby="owned-heading">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <p className="text-xs tracking-[0.2em] text-muted uppercase">
            What you own
          </p>
          <h2
            id="owned-heading"
            className="mt-3 max-w-2xl font-serif text-4xl tracking-tight sm:text-5xl"
          >
            Five services. One system, until the measurements say otherwise.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted">
            These are boundaries inside a single modular system. They split
            into separate deployments only when measurements justify the split.
          </p>
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon;
              return (
              <article
                key={service.number}
                className={`group flex flex-col rounded-2xl border bg-card p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(28,22,18,0.08)] sm:p-7 ${
                  service.differentiator ? "border-saffron lg:col-span-2" : "border-line"
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-forest text-paper transition duration-300 group-hover:bg-saffron">
                    <Icon className="h-6 w-6" />
                  </span>
                  <p className="font-serif text-sm text-muted">{service.number}</p>
                  {service.differentiator ? (
                    <p className="rounded-full bg-[#fde8df] px-3 py-1 text-[11px] tracking-wide text-saffron uppercase">
                      The differentiator
                    </p>
                  ) : null}
                </div>
                <h3 className="mt-3 font-serif text-3xl tracking-tight">
                  {service.name}
                </h3>
                <p className="mt-3 font-serif text-xl leading-snug">
                  {service.gets}
                </p>
                <p className="mt-3 text-sm leading-6 text-muted">{service.detail}</p>
              </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-card" aria-labelledby="infra-heading">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <p className="text-xs tracking-[0.2em] text-muted uppercase">
            Infrastructure reused
          </p>
          <h2
            id="infra-heading"
            className="mt-3 max-w-2xl font-serif text-4xl tracking-tight sm:text-5xl"
          >
            Use the stores and compute that already exist.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted">
            We do not build an object store, a database, a VM scheduler, and a
            filesystem kernel at the same time.
          </p>
          <div className="mt-8 overflow-hidden rounded-2xl border border-line bg-paper">
            <table className="w-full text-left text-sm">
              <caption className="sr-only">
                Infrastructure the workspace platform reuses
              </caption>
              <thead className="border-b border-line text-xs tracking-[0.16em] text-muted uppercase">
                <tr>
                  <th scope="col" className="px-5 py-4 font-medium">
                    Layer
                  </th>
                  <th scope="col" className="px-5 py-4 font-medium">
                    Role
                  </th>
                </tr>
              </thead>
              <tbody>
                {infrastructure.map((row) => (
                  <tr key={row.piece} className="border-b border-line last:border-0">
                    <th scope="row" className="px-5 py-4 font-serif text-lg font-normal">
                      {row.piece}
                    </th>
                    <td className="px-5 py-4 leading-6 text-muted">{row.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="border-b border-line" aria-labelledby="arch-heading">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <p className="text-xs tracking-[0.2em] text-muted uppercase">
            Architecture
          </p>
          <h2
            id="arch-heading"
            className="mt-3 max-w-2xl font-serif text-4xl tracking-tight sm:text-5xl"
          >
            Existing compute runs the agents. This system owns workspace state.
          </h2>
          <ol className="mt-10 grid gap-4 lg:grid-cols-3">
            {architecture.map((step, index) => (
              <li key={step.title} className="rounded-2xl bg-forest p-6 text-paper">
                <p className="text-xs tracking-[0.16em] text-[#9db5ab] uppercase">
                  0{index + 1}
                </p>
                <h3 className="mt-3 font-serif text-2xl leading-tight">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#d7e4de]">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-b border-line" aria-labelledby="first-heading">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <p className="text-xs tracking-[0.2em] text-muted uppercase">
            Built first
          </p>
          <h2
            id="first-heading"
            className="mt-3 max-w-2xl font-serif text-4xl tracking-tight sm:text-5xl"
          >
            Three things, in this order.
          </h2>
          <ol className="mt-10 grid gap-5 md:grid-cols-3">
            {firstBuild.map((item) => (
              <li key={item.number} className="rounded-2xl border border-line bg-card p-6">
                <p className="font-serif text-sm text-saffron">{item.number}</p>
                <h3 className="mt-3 font-serif text-2xl tracking-tight">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-b border-line bg-forest text-paper" aria-labelledby="market-heading">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <p className="text-xs tracking-[0.2em] text-[#9db5ab] uppercase">
            Why this layer
          </p>
          <h2
            id="market-heading"
            className="mt-3 max-w-3xl font-serif text-4xl tracking-tight sm:text-5xl"
          >
            The version graph and the consistency model are the part to own.
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-7 text-[#d7e4de]">
            Google Cloud Filestore’s agent volumes announcement names
            cold-start latency, idle-storage cost, workspace isolation, and
            multi-agent collaboration as the problem. Its first availability is
            evaluation and non-production, with production on an allow list.
            That shows the problem is real, and that a large cloud provider is
            already in it.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-5 py-14 md:px-8">
          <p className="max-w-xl font-serif text-3xl tracking-tight">
            Bring the agents you already run. We will talk about the workspace
            underneath them.
          </p>
          <Link
            href="/contact?interest=workspace"
            className="rounded-full bg-saffron px-5 py-3 text-sm text-white hover:bg-[#9a3412]"
          >
            Start a conversation
          </Link>
        </div>
      </section>
    </main>
  );
}
