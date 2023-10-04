export type Player = {
  lastName: string;
  firstName: string;
  attendance: boolean;
  id: string;
};

export type TodayPlayer = Player & {
  daysAttendance: Record<string, boolean>;
};

export type UpdatedAttendancePlayer = Pick<Player, "attendance" | "id">;
