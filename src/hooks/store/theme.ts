import { selectTheme } from '@/features/theme';
import { useAppSelector } from '@/hooks/store/store';

export const useTheme = () => useAppSelector(selectTheme);
