// Copyrights - Luminance Labs. All rights reserved.

import React from 'react';
import AgentListGroup from './AgentListGroup';
import useGroupedAgents from './useGroupedAgents';
import { useAuthContext } from '~/hooks';
import useSelectAgent from '~/hooks/Agents/useSelectAgent';

const AgentsSidebar: React.FC = () => {
  const { user } = useAuthContext();
  const currentUserId = user?.id || '';
  const { myAgents, publicAgents } = useGroupedAgents(currentUserId);
  const { onSelect } = useSelectAgent();

  return (
    <div className="agents-sidebar">
      <AgentListGroup title="My Agents" agents={myAgents} onAgentSelect={onSelect} />
      <AgentListGroup title="Public Agents" agents={publicAgents} onAgentSelect={onSelect} />
    </div>
  );
};

export default AgentsSidebar; 