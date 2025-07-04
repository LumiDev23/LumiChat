// Copyrights - Luminance Labs. All rights reserved.

import React from 'react';
import AgentListItem from './AgentListItem';
import type { Agent } from './types';

interface AgentListGroupProps {
  title: string;
  agents: Agent[];
  onAgentSelect: (agentId: string) => void;
}

const AgentListGroup: React.FC<AgentListGroupProps> = ({ title, agents, onAgentSelect }) => (
  <div className="mb-2">
    <div className="text-xs font-medium text-neutral-400 mb-1 pl-2">{title}</div>
    <div className="flex flex-col gap-1">
      {agents.length === 0 ? (
        <div className="text-xs text-neutral-300 pl-4">No agents</div>
      ) : (
        agents.map((agent) => (
          <AgentListItem key={agent.id} agent={agent} onSelect={onAgentSelect} />
        ))
      )}
    </div>
  </div>
);

export default AgentListGroup; 