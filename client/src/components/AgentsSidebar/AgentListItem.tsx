// Copyrights - Luminance Labs. All rights reserved.

import React from 'react';
import type { Agent } from './types';

interface AgentListItemProps {
  agent: Agent;
  onSelect: (agentId: string) => void;
}

const AgentListItem: React.FC<AgentListItemProps> = ({ agent, onSelect }) => (
  <div className="agent-list-item" onClick={() => onSelect(agent.id)} role="button" tabIndex={0}>
    {agent.avatar && (
      <img src={agent.avatar} alt={agent.name} className="agent-avatar" />
    )}
    <span className="agent-name">{agent.name}</span>
  </div>
);

export default AgentListItem; 