import React, { useState } from 'react';
import raidsData from '../mocks/raids.json';

export function CreateRaidEventForm() {
  const [selectedRaidId, setSelectedRaidId] = useState(raidsData[0]?.id || 1);
  const [selectedDifficulty, setSelectedDifficulty] = useState('');
  const [startsAt, setStartsAt] = useState('');

  const selectedRaid = raidsData.find((r) => r.id === Number(selectedRaidId));
  const totalSlots = selectedRaid?.sizes[0] || 25;

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRaidEvent = {
      id: Date.now(),
      raidId: selectedRaid.id,
      raidName: selectedRaid.name,
      startsAt: startsAt,
      difficulty: selectedDifficulty || selectedRaid.difficulties[0],
      slots: {
        total: totalSlots,
        filled: 1,
      },
      players: [
        { id: 101, name: 'LeaderName', role: 'tank' },
      ],
    };

    console.log('Submitted New Event Payload:', newRaidEvent);
  };

  return (
    <div>
      <h2 className='text-start'>Create Raid Event</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3 text-left">
        <div className='flex flex-col md:flex-row'>
            <div className='border p-2 md:w-3/4 mb-2 md:mb-0'>
                <label className="block mb-1">Select Raid</label>
                <select
                    value={selectedRaidId}
                    onChange={(e) => {
                    setSelectedRaidId(Number(e.target.value));
                    setSelectedDifficulty('');
                    }}
                    className="w-full border"
                >
                    {raidsData.map((raid) => (
                    <option key={raid.id} value={raid.id}>
                        [{raid.expansion === 'wrath_of_the_lich_king' ? 'WotLK' : 'TBC'}] {raid.name} ({raid.sizes.join('/')} man)
                    </option>
                    ))}
                </select>
            </div>

            <div className='border p-2 md:w-1/4'>
                <label className="block mb-1">Difficulty</label>
                <select
                    value={selectedDifficulty || selectedRaid?.difficulties[0]}
                    onChange={(e) => setSelectedDifficulty(e.target.value)}
                    className="w-full border"
                >
                    {selectedRaid?.difficulties.map((diff) => (
                    <option key={diff} value={diff}>
                        {diff.replace('_', ' ').toUpperCase()}
                    </option>
                    ))}
                </select>
            </div>
        </div>

        <div className='flex flex-col md:flex-row'>
        
            <div className='border flex flex-col p-2 w-full md:w-1/2 mb-2 md:mb-0'>
                <label className="block mb-1">Start Date & Time</label>
                <input
                    type="datetime-local"
                    required
                    value={startsAt}
                    onChange={(e) => setStartsAt(e.target.value)}
                    className="w-full border"
                />
            </div>

            {selectedRaid && (
            <div className="flex flex-col p-2 border w-full md:w-1/2">
                <div>
                <p>Total Slots: <span>{totalSlots} Players</span></p>
                <p>Bosses: <span>{selectedRaid.bossCount}</span></p>
                </div>
                <div>
                <p>Req. Level: <span>Lvl {selectedRaid.level}</span></p>
                </div>
            </div>
            )}
        </div>



        <button type="submit" className="w-full md:w-50 border">
          Create Raid Event
        </button>
      </form>
    </div>
  );
}