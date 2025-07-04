// Copyrights - Luminance Labs. All rights reserved.

import React from 'react';
import AgentListGroup from './AgentListGroup';
import useGroupedAgents from './useGroupedAgents';
import { useAuthContext } from '~/hooks';
import useSelectAgent from '~/hooks/Agents/useSelectAgent';
import { useNavigate } from 'react-router-dom';

const AgentsSidebar: React.FC = () => {
  const { user } = useAuthContext();
  const currentUserId = user?.id || '';
  const { myAgents, publicAgents } = useGroupedAgents(currentUserId);
  const { onSelect } = useSelectAgent();
  const navigate = useNavigate();

  const handleAgentSelect = (agentId: string) => {
    onSelect(agentId);
    navigate('/c/new', { state: { focusChat: true } });
  };

  return (
    <div className="flex flex-col gap-2 px-2 pt-2 pb-4">
      <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">Agents</div>
      <AgentListGroup title="My Agents" agents={myAgents} onAgentSelect={handleAgentSelect} />
      <AgentListGroup title="Public Agents" agents={publicAgents} onAgentSelect={handleAgentSelect} />
    </div>
  );
};

export default AgentsSidebar; 