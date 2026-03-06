package com.vrss.config;

import java.io.BufferedInputStream;
import java.io.FileInputStream;
import java.security.KeyStore;
import java.security.cert.CertificateFactory;
import java.security.cert.X509Certificate;

import javax.net.ssl.SSLContext;

import org.apache.hc.client5.http.impl.classic.HttpClients;
import org.apache.hc.client5.http.ssl.SSLConnectionSocketFactory;
import org.apache.hc.core5.ssl.SSLContexts;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.client.HttpComponentsClientHttpRequestFactory;
import org.springframework.web.client.RestClient;

@Configuration
public class ConfigClass {

//	@Bean
//	RestTemplate restTemplate() {
//		return new RestTemplate();
//	}

	@Bean
	RestClient restClient() throws Exception {
		String pemPath = "C:/Users/sshalem/OneDrive - ASML/ASML/BRES_pem/f28ecentre01-intel-com-chain.pem";

		// Build SSLContext trusting your PEM chain
		SSLContext sslContext = buildSslContextTrustingPem(pemPath);
		var sslsf = new SSLConnectionSocketFactory(sslContext);
		var httpClient = HttpClients.custom().setSSLSocketFactory(sslsf).build();

		return RestClient.builder().requestFactory(new HttpComponentsClientHttpRequestFactory(httpClient))
				.defaultHeaders(h -> h.setBasicAuth("yourUser", "yourPassword")).build();
	}

	private SSLContext buildSslContextTrustingPem(String pemPath) throws Exception {
		CertificateFactory cf = CertificateFactory.getInstance("X.509");
		KeyStore ks = KeyStore.getInstance(KeyStore.getDefaultType());
		ks.load(null, null);
		try (var bis = new BufferedInputStream(new FileInputStream(pemPath))) {
			int i = 0;
			while (bis.available() > 0) {
				X509Certificate cert = (X509Certificate) cf.generateCertificate(bis);
				ks.setCertificateEntry("alias-" + (i++), cert);
			}
		}
		return SSLContexts.custom().loadTrustMaterial(ks, null).build();
	}

}
