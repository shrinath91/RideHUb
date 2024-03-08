package com.example.demo.controller;

import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.BookingEntity;
import com.example.demo.entities.DummyBooking;
import com.example.demo.entities.PassengerEntity;

import com.example.demo.entities.RideEntity;
import com.example.demo.services.BookingService;
import com.example.demo.services.PassengerService;
import com.example.demo.services.RideService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class BookingController {

	@Autowired
	BookingService bser;
	
	@Autowired
	PassengerService pser;
	
	@Autowired
	RideService rser;
	
	
	@PostMapping("/saveBooking")
	public BookingEntity saveBooking(@RequestBody DummyBooking db)
	{
		System.out.print(db);
		PassengerEntity ps=pser.getPassByuid(db.getPass_id());
		RideEntity re=rser.getOneRide(db.getRide_id());
		BookingEntity bk=new BookingEntity();
		bk.setPass_id(ps);
		bk.setRideId(re);
		bk.setCapacity(db.getCapacity());
		bk.setTotal_ammt(db.getTotal_ammt());
		bk.setBooking_time(LocalDateTime.now());
		return bser.saveBooking(bk);
	}
}
