// Copyrights - Luminance Labs. All rights reserved.

import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import type { Agent } from './types';

interface AgentListItemProps {
  agent: Agent;
  onSelect: (agentId: string) => void;
}

const AgentListItem: React.FC<AgentListItemProps> = ({ agent, onSelect }) => {
  const navigate = useNavigate();

  const handleAgentSelect = (agentId) => {
    onSelect(agentId);
  };

  return (
    <button
      className="flex items-center gap-2 w-full px-2 py-1 rounded-md hover:bg-surface-secondary transition-colors text-left"
      onClick={() => {
        console.log('Agent clicked:', agent.id);
        handleAgentSelect(agent.id);
      }}
      type="button"
    >
      {agent.avatar ? (
        <img
          src={typeof agent.avatar === 'string' ? agent.avatar : agent.avatar.filepath}
          alt={agent.name}
          className="w-6 h-6 rounded-full object-cover"
        />
      ) : (
        <div className="w-6 h-6 rounded-full bg-neutral-300 flex items-center justify-center text-xs font-bold text-neutral-600">
          {agent.name?.[0]?.toUpperCase() || '?'}
        </div>
      )}
      <span className="truncate text-sm font-medium text-token-text-primary">{agent.name}</span>
    </button>
  );
};

export default AgentListItem; 