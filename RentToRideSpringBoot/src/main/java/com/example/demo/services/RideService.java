package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.demo.entities.DriverEntity;
import com.example.demo.entities.RideEntitiy;
import com.example.demo.repository.RideRepository;

@Service
public class RideService {

	@Autowired
	RideRepository rrepo;
	
	public RideEntitiy postRide(RideEntitiy r) {
		return rrepo.save(r);
	}
	
	public List<RideEntitiy> getAllRides()
	{
		return rrepo.findAll();
	}

	public RideEntitiy saveRide(RideEntitiy ride) {
		
		return rrepo.save(ride);
	}
	
	public String delRide(int id)
	{
		try {
			rrepo.deleteById(id);
		}
		catch (Exception e) {
			e.printStackTrace();
		}
		return "Deleted SuccessFully";
		
	}
}
