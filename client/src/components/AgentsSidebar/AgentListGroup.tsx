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
  <div className="agent-list-group">
    <h4 className="agent-list-group-title">{title}</h4>
    <div className="agent-list-group-items">
      {agents.map((agent) => (
        <AgentListItem key={agent.id} agent={agent} onSelect={onAgentSelect} />
      ))}
    </div>
  </div>
);

export default AgentListGroup; 