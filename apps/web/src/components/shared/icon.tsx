import {
  ArrowRight, BarChart3, BookOpen, Box, Briefcase, Building2, Camera, CalendarDays, Check,
  ChevronDown, Clapperboard, Code2, Component, Compass, ConciergeBell, FileCode2, FileText,
  Film, Figma, Gauge, GraduationCap, HeartPulse, Image as ImageIcon, LayoutGrid, LayoutTemplate,
  Link2, LineChart, Mail, MapPin, Megaphone, Menu, MessageCircle, MessagesSquare, Microscope,
  MonitorPlay, Moon, MousePointer2, MousePointerClick, Package, Palette, PenLine, PenTool, Phone,
  PieChart, Plane, Presentation, Quote, Repeat, Scissors, Search, Send, ServerCog, Share2, Shapes,
  ShieldCheck, ShoppingBag, ShoppingCart, Sparkles, SpellCheck, Star, Sun, Target, Type, Users,
  UtensilsCrossed, Video, Wifi, Wrench, X, type LucideIcon,
} from 'lucide-react';

const MAP: Record<string, LucideIcon> = {
  ArrowRight, BarChart3, BookOpen, Box, Briefcase, Building2, Camera, CalendarDays, Check,
  ChevronDown, Clapperboard, Code2, Component, Compass, ConciergeBell, FileCode2, FileText, Film,
  Figma, Gauge, GraduationCap, HeartPulse, Image: ImageIcon, LayoutGrid, LayoutTemplate, Link2,
  LineChart, Mail, MapPin, Megaphone, Menu, MessageCircle, MessagesSquare, Microscope, MonitorPlay,
  Moon, MousePointer2, MousePointerClick, Package, Palette, PenLine, PenTool, Phone, PieChart,
  Plane, Presentation, Quote, Repeat, Scissors, Search, Send, ServerCog, Share2, Shapes,
  ShieldCheck, ShoppingBag, ShoppingCart, Sparkles, SpellCheck, Star, Sun, Target, Type, Users,
  UtensilsCrossed, Video, Wifi, Wrench, X,
};

export interface IconProps {
  name?: string;
  className?: string;
}

/** Renders a lucide icon by name, falling back to a neutral glyph. */
export function Icon({ name, className }: IconProps) {
  const Cmp = (name && MAP[name]) || Sparkles;
  return <Cmp className={className} aria-hidden />;
}
