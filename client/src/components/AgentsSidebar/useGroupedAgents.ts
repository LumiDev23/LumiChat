// Copyrights - Luminance Labs. All rights reserved.

import { useMemo } from 'react';
import { useListAgentsQuery } from '~/data-provider';
import type { Agent } from './types';

interface GroupedAgents {
  myAgents: Agent[];
  publicAgents: Agent[];
}

const useGroupedAgents = (currentUserId: string): GroupedAgents => {
  const { data } = useListAgentsQuery();
  const agents: Agent[] = data?.data || [];

  return useMemo(() => {
    const myAgents: Agent[] = [];
    const publicAgents: Agent[] = [];
    agents.forEach((agent) => {
      if (agent.author === currentUserId) {
        myAgents.push(agent);
      } else {
        publicAgents.push(agent);
      }
    });
    return { myAgents, publicAgents };
  }, [agents, currentUserId]);
};

export default useGroupedAgents; 