export type Player = {
  lastName: string;
  firstName: string;
  daysAttendance?: Record<string, boolean>;
  attendance: boolean;
  id: string | number;
};

export type UpdatedAttendancePlayer = Pick<Player, "attendance" | "id">;
