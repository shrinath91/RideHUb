package com.example.demo.services;


import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.DriverEntity;
import com.example.demo.entities.RideEntity;
import com.example.demo.repository.DriverRepository;
import com.example.demo.repository.RideRepository;

@Service
public class RideService {

	@Autowired
	RideRepository rrepo;
	
	@Autowired
	DriverRepository drepo;
	
	public RideEntity postRide(RideEntity r) {
		return rrepo.save(r);
	}
	
	public List<RideEntity> getAllRides()
	{
		return rrepo.findAll();
	}

	public RideEntity saveRide(RideEntity ride) {
		
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

	 
//	public List<RideEntity> getRidesByDriverId(DriverEntity driver_user_id) {
//        return rrepo.findByRideDriverId(driver_user_id);
//	}
	
	 
	 public DriverEntity getDriverDetails(int rideId) {
		 DriverEntity driverDetails = new DriverEntity();
		 driverDetails.getFname();
         driverDetails.getContact();
     // Add any other driver details you want to include
     return driverDetails;
 }
	 public List<Object> searchRide(String start_loc, String end_loc,LocalDateTime tm) {
			System.out.println("Service");
			try
			{
				return rrepo.searchRide(start_loc,end_loc,tm);
				
			}
			catch (Exception e) {
				return null;
			}
		}
	 
	 public List<Object> getRideDriver(int r) {
			try
			{
				return rrepo.getRideDriver(r);
			}
			catch (Exception e)
			{
				e.printStackTrace();
				 System.out.print("Error Occures");
				 return null;
			}
		
	 }

	
		public RideEntity getOneRide(int id)
		{
			try
			{
				Optional<RideEntity> r = rrepo.findById(id);
				return r.get();
			}catch (Exception e) {
				e.printStackTrace();
				return null;
			}
			
		}
		
		public List<Object> getMyRide(int c) {
			try
			{
				return rrepo.getMyRide(c);
			}
			catch (Exception e) {
				e.printStackTrace();
				return null;
			}
			
		}
	
}
