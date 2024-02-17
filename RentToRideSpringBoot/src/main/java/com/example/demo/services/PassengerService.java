package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.PassengerEntity;
import com.example.demo.repository.PassengerRepository;

@Service
public class PassengerService {
	@Autowired
PassengerRepository prepo;
	
	public PassengerEntity savePassenger(PassengerEntity d) {
		return prepo.save(d);
	}
	
	public List<PassengerEntity> getAllPassenger()
	{
		return prepo.findAll();
	}
	

}
