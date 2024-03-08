package com.example.demo.entities;

import lombok.Getter;


public class DummySearchRide {
	private String start_location;
	private String end_location;
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
	public DummySearchRide(String start_location, String end_location) {
		super();
		this.start_location = start_location;
		this.end_location = end_location;
	}
	public DummySearchRide() {
		super();
	}
	

}

