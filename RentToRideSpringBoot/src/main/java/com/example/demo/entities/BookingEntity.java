package com.example.demo.entities;

import java.sql.Date;
import java.time.LocalDateTime;

import org.springframework.stereotype.Component;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Table(name = "booking")
@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Component
public class BookingEntity {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private int booking_id;

	@JsonIgnoreProperties
	@ManyToOne
	@JoinColumn(name = "ride_id")
    private RideEntity rideId;
	
	@JsonIgnoreProperties
	@ManyToOne
    @JoinColumn(name = "pass_id")
    private PassengerEntity pass_id;

    @Column
     private LocalDateTime booking_time;

    @Column
    private int capacity;

    @Column
    private int total_ammt;
    
}
