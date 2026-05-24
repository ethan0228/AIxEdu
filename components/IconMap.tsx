import {
  Atom,
  BrainCircuit,
  MonitorSmartphone,
  School,
  UsersRound,
  Wrench
} from "lucide-react";

const icons = {
  Atom,
  BrainCircuit,
  MonitorSmartphone,
  School,
  UsersRound,
  Wrench
};

type IconName = keyof typeof icons;

export function IconMap({ name }: { name: string }) {
  const Icon = icons[name as IconName] ?? BrainCircuit;
  return <Icon size={28} />;
}
