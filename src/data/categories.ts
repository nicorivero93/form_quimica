import type { ElementCategory } from '@/types/element';

export interface CategoryInfo {
  id: ElementCategory;
  name: string;
  color: string;
  bgClass: string;
  borderClass: string;
  textClass: string;
  ringClass: string;
}

export const CATEGORIES: Record<ElementCategory, CategoryInfo> = {
  alkali: {
    id: 'alkali',
    name: 'Alcalinos',
    color: '#ff6b6b',
    bgClass: 'bg-rose-500/20',
    borderClass: 'border-rose-500/40',
    textClass: 'text-rose-300',
    ringClass: 'ring-rose-500/60',
  },
  alkaline: {
    id: 'alkaline',
    name: 'Alcalinotérreos',
    color: '#ffa94d',
    bgClass: 'bg-orange-500/20',
    borderClass: 'border-orange-500/40',
    textClass: 'text-orange-300',
    ringClass: 'ring-orange-500/60',
  },
  transition: {
    id: 'transition',
    name: 'Metales de transición',
    color: '#74c0fc',
    bgClass: 'bg-sky-500/20',
    borderClass: 'border-sky-500/40',
    textClass: 'text-sky-300',
    ringClass: 'ring-sky-500/60',
  },
  'post-transition': {
    id: 'post-transition',
    name: 'Metales post-transición',
    color: '#a5b4fc',
    bgClass: 'bg-indigo-500/20',
    borderClass: 'border-indigo-500/40',
    textClass: 'text-indigo-300',
    ringClass: 'ring-indigo-500/60',
  },
  metalloid: {
    id: 'metalloid',
    name: 'Metaloides',
    color: '#ffd43b',
    bgClass: 'bg-yellow-500/20',
    borderClass: 'border-yellow-500/40',
    textClass: 'text-yellow-300',
    ringClass: 'ring-yellow-500/60',
  },
  nonmetal: {
    id: 'nonmetal',
    name: 'No metales',
    color: '#69db7c',
    bgClass: 'bg-emerald-500/20',
    borderClass: 'border-emerald-500/40',
    textClass: 'text-emerald-300',
    ringClass: 'ring-emerald-500/60',
  },
  halogen: {
    id: 'halogen',
    name: 'Halógenos',
    color: '#63e6be',
    bgClass: 'bg-teal-500/20',
    borderClass: 'border-teal-500/40',
    textClass: 'text-teal-300',
    ringClass: 'ring-teal-500/60',
  },
  noble: {
    id: 'noble',
    name: 'Gases nobles',
    color: '#e599f7',
    bgClass: 'bg-fuchsia-500/20',
    borderClass: 'border-fuchsia-500/40',
    textClass: 'text-fuchsia-300',
    ringClass: 'ring-fuchsia-500/60',
  },
  lanthanide: {
    id: 'lanthanide',
    name: 'Lantánidos',
    color: '#f783ac',
    bgClass: 'bg-pink-500/20',
    borderClass: 'border-pink-500/40',
    textClass: 'text-pink-300',
    ringClass: 'ring-pink-500/60',
  },
  actinide: {
    id: 'actinide',
    name: 'Actínidos',
    color: '#ff8787',
    bgClass: 'bg-red-500/20',
    borderClass: 'border-red-500/40',
    textClass: 'text-red-300',
    ringClass: 'ring-red-500/60',
  },
  unknown: {
    id: 'unknown',
    name: 'Desconocidos',
    color: '#adb5bd',
    bgClass: 'bg-slate-500/20',
    borderClass: 'border-slate-500/40',
    textClass: 'text-slate-300',
    ringClass: 'ring-slate-500/60',
  },
};

export const CATEGORY_LIST: CategoryInfo[] = Object.values(CATEGORIES);
