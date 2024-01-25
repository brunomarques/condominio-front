let eventGuid = 0
let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

export const INITIAL_EVENTS = [
    {
      id: createEventId(),
      title: 'All-day event',
      start: todayStr
    },
    {
      id: createEventId(),
      title: 'Timed event',
      start: todayStr + 'T12:00:00'
    },
    {
      id: createEventId(),
      title: 'Timed event 2',
      start: '2024-01-20T12:00:00',
      end: '2024-01-20T13:00:00'
    },
    {
      id: createEventId(),
      title: 'All-day event 2',
      start: todayStr
    },
    {
      id: createEventId(),
      title: 'Timed event3',
      start: todayStr + 'T12:00:00'
    },
    {
      id: createEventId(),
      title: 'Timed event 4',
      start: '2024-01-20T12:00:00',
      end: '2024-01-20T13:00:00'
    }
]

export function createEventId() {
  return String(eventGuid++)
}