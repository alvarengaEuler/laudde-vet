import {
  BriefcaseMedical,
  Building2,
  Dog,
  DollarSign,
  FileCode,
  FileText,
  LayoutDashboard,
  ShieldCheck,
  Tag,
  User,
  Users,
} from 'lucide-react'

export const menuItems = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Laudos', href: '/dashboard/laudos', icon: FileText },
  { name: 'Modelos de Texto', href: '/dashboard/modelos/editor', icon: FileCode },
  { name: 'Tutor', href: '/dashboard/tutor', icon: Users },
  { name: 'Pacientes', href: '/dashboard/pacientes', icon: Dog },
  { name: 'Clínicas', href: '/dashboard/clinicas', icon: Building2 },
  { name: 'Veterinários', href: '/dashboard/vets', icon: BriefcaseMedical },
  // { name: 'Financeiross', href: '/dashboard/financeiro', icon: DollarSign },
  { name: 'Perfil', href: '/dashboard/me', icon: User },
]

export const adminMenuItems = [
  { name: 'Usuários', href: '/admin/usuarios', icon: ShieldCheck },
  { name: 'Planos', href: '/admin/planos', icon: Tag },
]
