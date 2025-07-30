const TICKETS_KEY = "tickets";

export function getTickets() {
  const data = localStorage.getItem(TICKETS_KEY);
  return data ? JSON.parse(data) : [];
}

export function saveTickets(tickets) {
  localStorage.setItem(TICKETS_KEY, JSON.stringify(tickets));
}

export function getTicketsWithStatus() {
  const tickets = getTickets();
  return tickets.map((t) => ({ ...t, isStatus: t.isStatus || "" }));
}
