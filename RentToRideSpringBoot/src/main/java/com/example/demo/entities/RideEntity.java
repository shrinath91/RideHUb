package com.example.demo.entities;

import java.time.LocalDateTime;
import java.util.Date;

import org.springframework.stereotype.Component;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="rides")
@Component
public class RideEntity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	
	private int ride_id;
	
	@ManyToOne
	@JoinColumn(name="ride_driver_id")
	private DriverEntity ride_driver_id;
	
	@Column
	private String start_location;
	
	@Column
	private String end_location;
	
	@Column
	private LocalDateTime ride_time;
	
	@Column
	private float fare;
	
	@Column
	private int total_capacity;
	
	@Column
	private int current_capacity;
	
	@Column
	private String ride_status;
	
	public int getRide_id() {
		return ride_id;
	}
	public void setRide_id(int ride_id) {
		this.ride_id = ride_id;
	}
	public DriverEntity getRide_driver_id() {
		return ride_driver_id;
	}
	public void setRide_driver_id(DriverEntity ride_driver_id) {
		this.ride_driver_id = ride_driver_id;
	}
	public String getStart_location() {
		return start_location;
	}
	public void setStart_location(String start_location) {
		this.start_location = start_location;
	}
	public String getEnd_location() {
		return end_location;
	}
	public void setEnd_location(String end_location) {
		this.end_location = end_location;
	}
	public LocalDateTime getRide_time() {
		return ride_time;
	}
	public void setRide_time(LocalDateTime ride_time) {
		this.ride_time = ride_time;
	}
	public float getFare() {
		return fare;
	}
	public void setFare(float fare) {
		this.fare = fare;
	}
	public int getTotal_capacity() {
		return total_capacity;
	}
	public void setTotal_capacity(int total_capacity) {
		this.total_capacity = total_capacity;
	}
	public int getCurrent_capacity() {
		return current_capacity;
	}
	public void setCurrent_capacity(int current_capacity) {
		this.current_capacity = current_capacity;
	}
	public String getRide_status() {
		return ride_status;
	}
	public void setRide_status(String ride_status) {
		this.ride_status = ride_status;
	}
	public RideEntity() {
		super();
		// TODO Auto-generated constructor stub
	}
	public RideEntity(DriverEntity ride_driver_id, String start_location, String end_location, LocalDateTime ride_time,
			float fare, int total_capacity, int current_capacity, String ride_status) {
		super();
		this.ride_driver_id = ride_driver_id;
		this.start_location = start_location;
		this.end_location = end_location;
		this.ride_time = ride_time;
		this.fare = fare;
		this.total_capacity = total_capacity;
		this.current_capacity = current_capacity;
		this.ride_status = ride_status;
	}
	
}