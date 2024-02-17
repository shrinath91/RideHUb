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
@Table(name = "drivers")
public class DriverEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int driver_id;

	@OneToOne
	@JoinColumn(name = "driver_user_id")
	private UserEntity driver_user_id;

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
	private String model;
	
	@Column
	private String emergency_contact;

	@Column
	private String licence_no;

	@Column
	private String make;

	@Column
	private String colour;
	
	@Column
	private String registration_no;
	
	@Column
	private String no_plate;

	public int getDriver_id() {
		return driver_id;
	}

	public UserEntity getDriver_user_id() {
		return driver_user_id;
	}

	public String getFname() {
		return fname;
	}

	public String getLname() {
		return lname;
	}

	public String getContact() {
		return contact;
	}

	public String getEmail() {
		return email;
	}

	public String getAddress() {
		return address;
	}



	public String getEmergency_contact() {
		return emergency_contact;
	}

	public String getLicence_no() {
		return licence_no;
	}

	public String getMake() {
		return make;
	}

	public String getColour() {
		return colour;
	}

	public String getRegistration_no() {
		return registration_no;
	}

	public String getNo_plate() {
		return no_plate;
	}

	public void setDriver_id(int driver_id) {
		this.driver_id = driver_id;
	}

	public void setDriver_user_id(UserEntity driver_user_id) {
		this.driver_user_id = driver_user_id;
	}

	public void setFname(String fname) {
		this.fname = fname;
	}

	public void setLname(String lname) {
		this.lname = lname;
	}

	public void setContact(String contact) {
		this.contact = contact;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public void setAddress(String address) {
		this.address = address;
	}


	public void setEmergency_contact(String emergency_contact) {
		this.emergency_contact = emergency_contact;
	}

	public void setLicence_no(String licence_no) {
		this.licence_no = licence_no;
	}

	public void setMake(String make) {
		this.make = make;
	}

	public void setColour(String colour) {
		this.colour = colour;
	}

	public void setRegistration_no(String registration_no) {
		this.registration_no = registration_no;
	}

	public void setNo_plate(String no_plate) {
		this.no_plate = no_plate;
	}

	public String getModel() {
		return model;
	}

	public void setModel(String model) {
		this.model = model;
	}

	public DriverEntity() {
		super();
		// TODO Auto-generated constructor stub
	}

	public DriverEntity(String fname2, String lname2, String address2, String contact2, String email2,
			String emergency_contact2, String licence_no2, String model2, String no_plate2, String registration_no2,
			String make2, String colour2, UserEntity ue) {
		this.fname=fname2;
		this.lname=lname2;
		this.address=address2;
		this.contact=contact2;
		this.email=email2;
		this.emergency_contact=emergency_contact2;
		this.licence_no=licence_no2;
		this.model=model2;
		this.no_plate=no_plate2;
		this.registration_no=registration_no2;
		this.make=make2;
		this.colour=colour2;
		this.driver_user_id=ue;
		
	}

	

	
	
	
	
	
	
}
