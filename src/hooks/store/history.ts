import { selectHistoryCities } from '@/features/history';
import { useAppSelector } from '@/hooks/store/store';

export const useHistoryCities = () => useAppSelector(selectHistoryCities);
