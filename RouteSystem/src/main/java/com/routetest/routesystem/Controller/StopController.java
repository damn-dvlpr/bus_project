package com.routetest.routesystem.Controller;

import com.routetest.routesystem.Beans.Stop;
import com.routetest.routesystem.Service.StopService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/stop")
@Slf4j
public class StopController {

    @Autowired
    private StopService stopService;

    @PostMapping("/save")
    public void addStop(@RequestBody Stop stop){
        stopService.addStop(stop);
    }

    @GetMapping("/all")
    public List<Stop> getAllStops(){
        return stopService.getAllStops();
    }

}
