type IconProps = {
  className?: string;
};

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function EarnIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <path {...stroke} d="M6 22.5 13 15l4 4 9-10" />
      <path {...stroke} d="M18 9h8v8" />
    </svg>
  );
}

export function SaveIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <path {...stroke} d="M16 5c4 5 7 8.2 7 12.2A7 7 0 1 1 9 17.2C9 13.2 12 10 16 5Z" />
      <path {...stroke} d="M13 19.5h6" />
    </svg>
  );
}

export function ControlIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <path {...stroke} d="M16 5 7 9v7.2c0 5.2 3.6 8.8 9 10.8 5.4-2 9-5.6 9-10.8V9L16 5Z" />
      <path {...stroke} d="m12.5 16 2.4 2.4 4.8-5" />
    </svg>
  );
}

export function PartnersIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <path {...stroke} d="M8 25V13l8-5 8 5v12" />
      <path {...stroke} d="M13 25v-6h6v6" />
      <path {...stroke} d="M5 25h22" />
    </svg>
  );
}

export function BranchIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <circle {...stroke} cx="9" cy="8" r="2.2" />
      <circle {...stroke} cx="23" cy="12" r="2.2" />
      <circle {...stroke} cx="9" cy="24" r="2.2" />
      <path {...stroke} d="M9 10.2v11.6M9 10c6 0 8 1.2 12 2" />
    </svg>
  );
}

export function LayersIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <path {...stroke} d="m16 6 10 5-10 5L6 11l10-5Z" />
      <path {...stroke} d="m6 16 10 5 10-5" />
      <path {...stroke} d="m6 21 10 5 10-5" />
    </svg>
  );
}

export function MergeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <circle {...stroke} cx="8" cy="8" r="2.2" />
      <circle {...stroke} cx="8" cy="24" r="2.2" />
      <circle {...stroke} cx="24" cy="16" r="2.2" />
      <path {...stroke} d="M10 9.2c6 1 8 3.2 12 6.8M10 22.8c6-1 8-3.2 12-6.8" />
    </svg>
  );
}

export function CacheIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <rect {...stroke} x="6" y="7" width="20" height="18" rx="3" />
      <path {...stroke} d="M6 13h20M12 18h8" />
    </svg>
  );
}

export function MeterIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <path {...stroke} d="M7 20a9 9 0 1 1 18 0" />
      <path {...stroke} d="m16 20 5-6" />
      <path {...stroke} d="M10 24h12" />
    </svg>
  );
}

const categoryIcons = {
  earn: EarnIcon,
  save: SaveIcon,
  control: ControlIcon,
  partners: PartnersIcon,
} as const;

export function CategoryIcon({
  id,
  className,
}: {
  id: keyof typeof categoryIcons;
  className?: string;
}) {
  const Icon = categoryIcons[id];
  return <Icon className={className} />;
}
