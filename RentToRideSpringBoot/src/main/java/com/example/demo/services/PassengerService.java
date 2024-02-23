package com.example.demo.services;

import java.util.List;
import java.util.Optional;

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
	
	public PassengerEntity getOne(int passenger_id) {
		try
		{
			Optional<PassengerEntity>p=prepo.findById(passenger_id);
			return p.get();
		}
		catch(Exception e)
		{
			e.printStackTrace();
			return null;
		}

	}
	
	public PassengerEntity getPassByuid(int uid) {
		return prepo.getPassByUid(uid);
	}
	
	public List<PassengerEntity> getAllPassenger()
	{
		return prepo.findAll();
	}
	

}
