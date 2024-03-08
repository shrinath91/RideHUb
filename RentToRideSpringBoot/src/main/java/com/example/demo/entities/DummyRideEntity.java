package com.example.demo.entities;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;

public class DummyRideEntity {
	private String start_location;
	private String end_location;
	private LocalDateTime ride_time;
	private float fare;
	private int total_capacity;
	private int current_capacity;
	private String ride_status;
	private int ride_driver_id;
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
	public int getRide_driver_id() {
		return ride_driver_id;
	}
	public void setRide_driver_id(int ride_driver_id) {
		this.ride_driver_id = ride_driver_id;
	}
	@Override
	public String toString() {
		return "DummyRideEntity [start_location=" + start_location + ", end_location=" + end_location + ", ride_time="
				+ ride_time + ", fare=" + fare + ", total_capacity=" + total_capacity + ", current_capacity="
				+ current_capacity + ", ride_status=" + ride_status + ", ride_driver_id=" + ride_driver_id + "]";
	}
	
	
}