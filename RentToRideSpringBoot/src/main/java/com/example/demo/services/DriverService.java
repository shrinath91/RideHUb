package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.entities.DriverEntity;
import com.example.demo.repository.DriverRepository;

@Service
public class DriverService {
	@Autowired
	DriverRepository drepo;
	
	public DriverEntity saveDriver(DriverEntity d) {
		return drepo.save(d);
	}
	
	public List<DriverEntity> getAllDriver()
	{
		return drepo.findAll();
	}

	public DriverEntity getOneDriver(int id) {
		try {
			Optional<DriverEntity> d = drepo.findById(id);
			return d.get();
		}catch(Exception e){
			return null;
		}
	}
	public DriverEntity getDriverByUserId(int id) {
		return drepo.getDriverByuserId(id);
	}
	
	 public DriverEntity getDriverDetails(int ride_driver_id) {
	        return drepo.findById(ride_driver_id).orElse(null);
	    } 
	
	 
}
