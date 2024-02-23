package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.BookingEntity;
import com.example.demo.repository.BookingRepository;

@Service
public class BookingService {
	
	@Autowired
	BookingRepository brepo;
	
	public BookingEntity saveBooking(BookingEntity e)
	{
		return brepo.save(e);
	}
}
