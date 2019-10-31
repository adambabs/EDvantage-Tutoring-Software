package ca.mcgill.ecse321.eventregistration.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

@Entity
public class RoomBooking{
   private String requestNb;

public void setRequestNb(String value) {
    this.requestNb = value;
}
@Id
public String getRequestNb() {
    return this.requestNb;
}
   private Session session;
   
   @OneToOne(mappedBy="roomBooking", optional=false)
   public Session getSession() {
      return this.session;
   }
   
   public void setSession(Session session) {
      this.session = session;
   }
   
   private Room room;
   
   @OneToOne(optional=false)
   public Room getRoom() {
      return this.room;
   }
   
   public void setRoom(Room room) {
      this.room = room;
   }
   
   }
