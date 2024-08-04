import { useMutation, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { login, trackShipment } from '@/api';
import parseError from '@/utils';
import { TrackPayload } from '@/api/types';

export const useLogin = () => {
  const { isPending, mutate, error } = useMutation({
    mutationFn: login,
  });

  return { isPending, login: mutate, error: error ? parseError(error as AxiosError) : undefined };
};

export const useTrackShipment = (params: TrackPayload) => {
  const { data, error, isPending, refetch } = useQuery({
    queryKey: ['track_shipment', params],
    queryFn: () => trackShipment(params),
    enabled: !!Object.values(params).length,
  });

  return {
    error: error ? parseError(error as AxiosError) : undefined,
    data: data,
    isLoading: isPending,
    refetch,
  };
};
