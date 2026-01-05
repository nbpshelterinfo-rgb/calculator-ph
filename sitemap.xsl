<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:s="http://www.sitemaps.org/schemas/sitemap/0.9">

  <xsl:output method="html" encoding="UTF-8" indent="yes"/>

  <xsl:template match="/">
    <html>
      <head>
        <title>Sitemap - calculator.esla.ph</title>
        <meta name="robots" content="noindex,nofollow"/>
        <style>
          body{font-family:Arial, sans-serif; margin:24px;}
          table{border-collapse:collapse; width:100%;}
          th,td{border:1px solid #ddd; padding:8px; font-size:14px;}
          th{background:#f5f5f5; text-align:left;}
          a{color:#0b57d0; text-decoration:none;}
          a:hover{text-decoration:underline;}
        </style>
      </head>
      <body>
        <h2>Sitemap: calculator.esla.ph</h2>
        <p>Total URLs: <strong><xsl:value-of select="count(s:urlset/s:url)"/></strong></p>
        <table>
          <tr>
            <th>URL</th>
            <th>Last Modified</th>
            <th>Changefreq</th>
            <th>Priority</th>
          </tr>
          <xsl:for-each select="s:urlset/s:url">
            <tr>
              <td><a><xsl:attribute name="href"><xsl:value-of select="s:loc"/></xsl:attribute><xsl:value-of select="s:loc"/></a></td>
              <td><xsl:value-of select="s:lastmod"/></td>
              <td><xsl:value-of select="s:changefreq"/></td>
              <td><xsl:value-of select="s:priority"/></td>
            </tr>
          </xsl:for-each>
        </table>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
