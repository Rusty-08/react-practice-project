import {
  Chrome,
  CircleDollarSign,
  Globe,
  HelpCircle,
  Keyboard,
  Languages,
  LogOut,
  MessageSquarePlus,
  Moon,
  PlaySquare,
  Settings,
  User2,
  UserRoundCog,
  UserSquare,
} from "lucide-react";

export const profileOptions = [
  [
    { icon: Chrome, name: "Google Account", extend: false },
    { icon: UserSquare, name: "Switch Account", extend: true },
    { icon: LogOut, name: "Sign out", extend: false },
  ],
  [
    { icon: PlaySquare, name: "YouTube Studio", extend: false },
    { icon: CircleDollarSign, name: "Purchases and membership", extend: false },
  ],
  [
    { icon: User2, name: "Your data in YouTube", extend: false },
    { icon: Moon, name: "Appearance: Device theme", extend: true },
    { icon: Languages, name: "Language: English", extend: true },
    { icon: UserRoundCog, name: "Restricted Mode: Off", extend: true },
    { icon: Globe, name: "Location: Philippines", extend: true },
    { icon: Keyboard, name: "Keyboard shortcuts", extend: false },
  ],
  [{ icon: Settings, name: "Settings", extend: false }],
  [
    { icon: HelpCircle, name: "Help", extend: false },
    { icon: MessageSquarePlus, name: "Send feedback", extend: false },
  ],
];
