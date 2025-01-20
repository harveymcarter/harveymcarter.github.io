          {/* Recent Media Appearances */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-media-ink mb-6">
              {t('press.recentAppearances')}
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Link
                to="/press/appearance/digital-journalism-future"
                className="block p-6 bg-white rounded-xl border border-media-border hover:border-media-primary transition-colors"
              >
                <h3 className="font-bold text-lg text-media-ink mb-2">
                  {t('press.recentAppearance1.title')}
                </h3>
                <div className="text-media-muted mb-4">
                  <p>{t('press.recentAppearance1.outlet')}</p>
                  <p>{t('press.recentAppearance1.date')}</p>
                </div>
                <span className="text-media-primary hover:text-media-primary-dark inline-flex items-center">
                  {t('press.watchAppearance')} →
                </span>
              </Link>

              <Link
                to="/press/appearance/media-trends"
                className="block p-6 bg-white rounded-xl border border-media-border hover:border-media-primary transition-colors"
              >
                <h3 className="font-bold text-lg text-media-ink mb-2">
                  {t('press.recentAppearance2.title')}
                </h3>
                <div className="text-media-muted mb-4">
                  <p>{t('press.recentAppearance2.outlet')}</p>
                  <p>{t('press.recentAppearance2.date')}</p>
                </div>
                <span className="text-media-primary hover:text-media-primary-dark inline-flex items-center">
                  {t('press.watchAppearance')} →
                </span>
              </Link>
            </div>
          </section> 