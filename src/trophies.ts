import { getTropyIcon } from "./icons.ts";


export abstract class Trophy {
  rank: string = "?";
  topMessage = "Unknown";
  bottomMessage = "+0";
  title = "";
  abstract setRank(): void;
  render(x = 0, y = 0, cardSize = 110): string {
    return `
        <svg
          x="${x}"
          y="${y}"
          width="${cardSize}"
          height="${cardSize}"
          viewBox="0 0 ${cardSize} ${cardSize}"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            data-testid="card-bg"
            x="0.5"
            y="0.5"
            rx="4.5"
            width="${cardSize - 1}"
            height="${cardSize - 1}"
            stroke="#e1e4e8"
            fill="#fff"
            stroke-opacity="1"
          />
          ${getTropyIcon(this.rank)}
          <text x="50%" y="18" text-anchor="middle" font-family="Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;" font-weight="bold" font-size="12" fill="#000">${this.title}</text>
          <text x="50%" y="85" text-anchor="middle" font-family="Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;" font-weight="bold" font-size="9.5" fill="#666">${this.topMessage}</text>
          <text x="50%" y="97" text-anchor="middle" font-family="Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;" font-weight="bold" font-size="9" fill="#666">${this.bottomMessage}</text>
        </svg>
        `;
  }
}

export class TotalStarTrophy extends Trophy {
  constructor(private totalStartgazer: Number) {
    super();
    this.title = "STAR";
    this.setRank();
  }
  setRank() {
    if (this.totalStartgazer >= 1000) {
      this.rank = "S";
      this.topMessage = "Super Star";
      this.bottomMessage = "+1000";
    } else if (this.totalStartgazer >= 500) {
      this.rank = "A";
      this.topMessage = "High Star";
      this.bottomMessage = "+500";
    } else if (this.totalStartgazer >= 100) {
      this.rank = "B";
      this.topMessage = "Middle Star";
      this.bottomMessage = "+100";
    } else if (this.totalStartgazer >= 1) {
      this.rank = "C";
      this.topMessage = "First Star";
      this.bottomMessage = "+1";
    }
  }
}

export class TotalCommitTrophy extends Trophy {
  constructor(private totalStartgazer: Number) {
    super();
    this.title = "COMMIT";
    this.setRank();
  }
  setRank() {
    if (this.totalStartgazer >= 5000) {
      this.rank = "S";
      this.topMessage = "Super Commiter";
      this.bottomMessage = "+5000";
    } else if (this.totalStartgazer >= 1000) {
      this.rank = "A";
      this.topMessage = "High Commiter";
      this.bottomMessage = "+1000";
    } else if (this.totalStartgazer >= 200) {
      this.rank = "B";
      this.topMessage = "Middle Commiter";
      this.bottomMessage = "+200";
    } else if (this.totalStartgazer >= 1) {
      this.rank = "C";
      this.topMessage = "First Commit";
      this.bottomMessage = "+1";
    }
  }
}

export class TotalFollowerTrophy extends Trophy {
  constructor(private totalStartgazer: Number) {
    super();
    this.title = "FOLLOWER";
    this.setRank();
  }
  setRank() {
    if (this.totalStartgazer >= 500) {
      this.rank = "S";
      this.topMessage = "Celebrity";
      this.bottomMessage = "+500";
    } else if (this.totalStartgazer >= 200) {
      this.rank = "A";
      this.topMessage = "Famous User";
      this.bottomMessage = "+200";
    } else if (this.totalStartgazer >= 50) {
      this.rank = "B";
      this.topMessage = "Many Friends";
      this.bottomMessage = "+50";
    } else if (this.totalStartgazer >= 1) {
      this.rank = "C";
      this.topMessage = "First Friend";
      this.bottomMessage = "+1";
    }
  }
}