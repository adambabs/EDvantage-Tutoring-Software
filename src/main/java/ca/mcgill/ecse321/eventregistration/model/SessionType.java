package ca.mcgill.ecse321.eventregistration.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import java.util.Set;
import java.util.HashSet;

@Entity
public enum SessionType{;
   private String group;

public void setGroup(String value) {
    this.group = value;
}
public String getGroup() {
    return this.group;
}
private String individual;

public void setIndividual(String value) {
    this.individual = value;
}
public String getIndividual() {
    return this.individual;
}
}