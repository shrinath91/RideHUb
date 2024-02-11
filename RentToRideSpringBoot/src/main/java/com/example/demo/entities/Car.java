package com.example.demo.entities;

import java.sql.Date;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Getter
@Setter

@Entity
@Table(name = "cars")
public class Car {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "car_id")
    private int carId;
	
	
    @Column(name = "driver_id")
    private int driverId;

    @Column(name = "reg_date")
    @JsonFormat(pattern = "YYYY-MM-DD")
//    @Temporal(TemporalType.TIMESTAMP)
    private Date registrationDate;

    

    @Column(name = "model")
    private String model;

    @Column(name = "make")
    private String make;

    @Column(name = "colour")
    private String colour;
    
    @Column(name = "license_Plate")
    private String license_Plate;

    
    public Car() {
		super();
		// TODO Auto-generated constructor stub
	}
    
	public Car( int driverId, Date registrationDate, String model, String make,
			String colour, String license_Plate) {
		super();
		
		this.driverId = driverId;
		this.registrationDate = registrationDate;
		
		this.model = model;
		this.make = make;
		this.colour = colour;
		this.license_Plate = license_Plate;
	}

	
    
    
    
}
