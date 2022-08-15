import VotesPerHour from "./VotesPerHour";

interface Brother {
  id: string;

  name: string;

  votes: number;

  votesPerHour: VotesPerHour[];
}

export default Brother;
