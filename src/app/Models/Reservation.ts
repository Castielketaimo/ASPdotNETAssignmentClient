import { Boat } from './Boat';
import { User } from './User';
export class Reservation {

    constructor(public ReservationId: number,
                public StartDateTime: number,
                public EndDateTime: number,
                public CreatedBy: User,
                public BoatId: number,
                public Boat: Boat,
    ){}
}
