package com.vrss.config;

//import java.io.FileInputStream;
//import java.security.KeyStore;
//import java.security.cert.Certificate;
//import java.security.cert.CertificateFactory;
//import java.util.Collection;
//
//import javax.net.ssl.SSLContext;
//
//import org.apache.http.conn.ssl.SSLConnectionSocketFactory;
//import org.apache.http.impl.client.CloseableHttpClient;
//import org.apache.http.impl.client.HttpClients;
//import org.apache.http.ssl.SSLContextBuilder;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.http.client.HttpComponentsClientHttpRequestFactory;
//import org.springframework.web.client.RestTemplate;

//@Configuration
public class ConfigClassReadPemFromOutside {

//	@Value("${app.certificate.path}")
//	private String pemPath;
	
//	@Bean
//	RestTemplate restTemplate() throws Exception {
//
//		String pemPath = "C:/Users/sshalem/OneDrive - ASML/ASML/BRES_pem/f28ecentre01-intel-com-chain.pem";
//
//		CertificateFactory cf = CertificateFactory.getInstance("X.509");
//
//		Collection<? extends Certificate> certs = cf.generateCertificates(new FileInputStream(pemPath));
//
//		KeyStore trustStore = KeyStore.getInstance(KeyStore.getDefaultType());
//		trustStore.load(null, null);
//
//		int i = 0;
//		for (Certificate cert : certs) {
//			trustStore.setCertificateEntry("cert" + i++, cert);
//		}
//
//		SSLContext sslContext = SSLContextBuilder.create().loadTrustMaterial(trustStore, null).build();
//
//		SSLConnectionSocketFactory socketFactory = new SSLConnectionSocketFactory(sslContext);
//
//		CloseableHttpClient httpClient = HttpClients.custom().setSSLSocketFactory(socketFactory).build();
//
//		HttpComponentsClientHttpRequestFactory factory = new HttpComponentsClientHttpRequestFactory(httpClient);
//
//		return new RestTemplate(factory);
//	}
}
