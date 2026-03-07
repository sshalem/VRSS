package com.vrss.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class VrssService {

	@Autowired
	private RestTemplate restTemplate;

	public String connectToASMLServerTest() {

//		String url = "https://f28ecentre01.intel.com/ecweb/echttpproxy/ASML.TWINSCAN.MEU04.HTTP/AIDwebdav/root/CT/CTRW_log_mEU04.cur";

		String url = "https://f28ecentre01.intel.com/ecweb/echttpproxy/ASML.TWINSCAN.MIQ09.HTTP/AIDwebdav/root/service_data/Passdown/action_old.txt";

		String username = "asml_sshalem";
		String password = "Odel1!!";

		HttpHeaders headers = new HttpHeaders();
		headers.setBasicAuth(username, password);

		HttpEntity<Void> entity = new HttpEntity<>(headers);

		ResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.GET, entity, String.class);

		return response.getBody();
	}

}
