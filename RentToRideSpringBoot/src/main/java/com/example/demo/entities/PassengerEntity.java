package com.example.demo.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="passengers")
public class PassengerEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int passenger_id;

	@OneToOne
	@JoinColumn(name = "passenger_user_id")
	private UserEntity passenger_user_id;

	@Column
	private String fname;

	@Column
	private String lname;

	@Column
	private String contact;

	@Column
	private String email;

	@Column
	private String address;

	@Column
	private int rating;
	
	@Column
	private String emergency_contact;

	public int getPassenger_id() {
		return passenger_id;
	}

	public void setPassenger_id(int passenger_id) {
		this.passenger_id = passenger_id;
	}

	public UserEntity getPassenger_user_id() {
		return passenger_user_id;
	}

	public void setPassenger_user_id(UserEntity passenger_user_id) {
		this.passenger_user_id = passenger_user_id;
	}

	public String getFname() {
		return fname;
	}

	public void setFname(String fname) {
		this.fname = fname;
	}

	public String getLname() {
		return lname;
	}

	public void setLname(String lname) {
		this.lname = lname;
	}

	public String getContact() {
		return contact;
	}

	public void setContact(String contact) {
		this.contact = contact;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public int getRating() {
		return rating;
	}

	public void setRating(int rating) {
		this.rating = rating;
	}

	public String getEmergency_contact() {
		return emergency_contact;
	}

	public void setEmergency_contact(String emergency_contact) {
		this.emergency_contact = emergency_contact;
	}

	public PassengerEntity(UserEntity passenger_user_id, String fname, String lname, String contact, String email,
			String address, int rating, String emergency_contact) {
		super();
		this.passenger_user_id = passenger_user_id;
		this.fname = fname;
		this.lname = lname;
		this.contact = contact;
		this.email = email;
		this.address = address;
		this.rating = rating;
		this.emergency_contact = emergency_contact;
	}

	public PassengerEntity() {
		super();
		// TODO Auto-generated constructor stub
	}


}
