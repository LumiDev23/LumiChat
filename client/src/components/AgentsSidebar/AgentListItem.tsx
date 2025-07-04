// Copyrights - Luminance Labs. All rights reserved.

import React, { useState, useEffect } from 'react';
import type { Agent } from './types';
import { useNavigate } from 'react-router-dom';
import { useConversation } from '../../hooks/useConversation';

interface AgentListItemProps {
  agent: Agent;
  onSelect: (agentId: string) => void;
}

const AgentListItem: React.FC<AgentListItemProps> = ({ agent, onSelect }) => {
  const navigate = useNavigate();
  const { conversation } = useConversation();
  const [pendingAgentId, setPendingAgentId] = useState(null);

  const handleAgentSelect = (agentId) => {
    onSelect(agentId);
    setPendingAgentId(agentId);
  };

  useEffect(() => {
    if (pendingAgentId && conversation?.agent_id === pendingAgentId) {
      navigate('/c/new', { state: { focusChat: true } });
      setPendingAgentId(null);
    }
  }, [pendingAgentId, conversation?.agent_id, navigate]);

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
        <img src={agent.avatar} alt={agent.name} className="w-6 h-6 rounded-full object-cover" />
      ) : (
        <div className="w-6 h-6 rounded-full bg-neutral-300 flex items-center justify-center text-xs font-bold text-neutral-600">
          {agent.name?.[0]?.toUpperCase() || '?'}
        </div>
      )}
      <span className="truncate text-sm font-medium text-neutral-800">{agent.name}</span>
    </button>
  );
};

export default AgentListItem; 