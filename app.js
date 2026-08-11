(() => {
    "use strict";

    // ==================================================
    // DOM
    // ==================================================

    const $ = id => document.getElementById(id);

    const screens = {
        home: $("homeScreen"),
        plannerHub: $("plannerHubScreen"),
        startOverview: $("startOverviewScreen"),
        plans: $("plansScreen"),
        newPlan: $("newPlanScreen"),
        planEditor: $("planEditorScreen"),
        task: $("taskScreen"),
        break: $("breakScreen"),
        session: $("sessionScreen"),
        sessionReview: $("sessionReviewScreen"),
        planComplete: $("planCompleteScreen"),
        textsHub: $("textsHubScreen"),
        thoughtList: $("thoughtListScreen"),
        thoughtFolderEditor: $("thoughtFolderEditorScreen"),
        thoughtEditor: $("thoughtEditorScreen"),
        dayList: $("dayListScreen"),
        dayEditor: $("dayEditorScreen"),
        dreamList: $("dreamListScreen"),
        dreamEditor: $("dreamEditorScreen"),
        reviewLibrary: $("reviewLibraryScreen"),
        folderEditor: $("folderEditorScreen"),
        reviewEditor: $("reviewEditorScreen")
    };

    const el = {
        backupFileInput: $("backupFileInput"),

        miniSessionBar: $("miniSessionBar"),
        miniSessionButton: $("miniSessionButton"),
        miniSessionName: $("miniSessionName"),
        miniSessionTime: $("miniSessionTime"),

        openPlannerButton: $("openPlannerButton"),
        openTextsButton: $("openTextsButton"),
        backupButton: $("backupButton"),
        restoreButton: $("restoreButton"),
        themeButton: $("themeButton"),

        backFromPlannerHub: $("backFromPlannerHub"),
        plannerStartButton: $("plannerStartButton"),
        plannerPlansButton: $("plannerPlansButton"),

        backFromStartOverview: $("backFromStartOverview"),
        startPlanTitle: $("startPlanTitle"),
        noActivePlanMessage: $("noActivePlanMessage"),
        activePlanOverview: $("activePlanOverview"),
        startPlanItems: $("startPlanItems"),
        totalPlanDuration: $("totalPlanDuration"),
        goButton: $("goButton"),

        backFromPlans: $("backFromPlans"),
        addPlanButton: $("addPlanButton"),
        plansList: $("plansList"),
        emptyPlansMessage: $("emptyPlansMessage"),

        backFromNewPlan: $("backFromNewPlan"),
        planName: $("planName"),
        newPlanError: $("newPlanError"),
        createPlanButton: $("createPlanButton"),

        backFromEditor: $("backFromEditor"),
        editorPlanTitle: $("editorPlanTitle"),
        editorPlanName: $("editorPlanName"),
        planItems: $("planItems"),
        emptyPlanMessage: $("emptyPlanMessage"),
        addTaskButton: $("addTaskButton"),
        addBreakButton: $("addBreakButton"),
        editorError: $("editorError"),
        savePlanButton: $("savePlanButton"),
        deletePlanButton: $("deletePlanButton"),

        backFromTask: $("backFromTask"),
        taskName: $("taskName"),
        taskDuration: $("taskDuration"),
        taskNote: $("taskNote"),
        taskError: $("taskError"),
        saveTaskButton: $("saveTaskButton"),

        backFromBreak: $("backFromBreak"),
        breakDuration: $("breakDuration"),
        breakError: $("breakError"),
        saveBreakButton: $("saveBreakButton"),

        sessionMenuButton: $("sessionMenuButton"),
        sessionEndButton: $("sessionEndButton"),
        sessionType: $("sessionType"),
        sessionTitle: $("sessionTitle"),
        sessionProgress: $("sessionProgress"),
        sessionCard: $("sessionCard"),
        sessionTimer: $("sessionTimer"),
        sessionNote: $("sessionNote"),
        sessionNoteWrap: $("sessionNoteWrap"),
        sessionFlipHint: $("sessionFlipHint"),
        universeCanvas: $("universeCanvas"),
        sessionCurveName: $("sessionCurveName"),

        reviewTitle: $("reviewTitle"),
        reviewNote: $("reviewNote"),
        reviewDuration: $("reviewDuration"),
        reviewError: $("reviewError"),
        saveReviewButton: $("saveReviewButton"),

        nietzscheQuote: $("nietzscheQuote"),
        nietzscheSource: $("nietzscheSource"),
        completePlanButton: $("completePlanButton"),

        backFromTextsHub: $("backFromTextsHub"),
        textsMenuButton: $("textsMenuButton"),
        textsMenuPanel: $("textsMenuPanel"),
        openThoughtsButton: $("openThoughtsButton"),
        openDaysButton: $("openDaysButton"),
        openDreamsButton: $("openDreamsButton"),
        openFilmsButton: $("openFilmsButton"),
        openBooksButton: $("openBooksButton"),

        backFromThoughtList: $("backFromThoughtList"),
        addThoughtButton: $("addThoughtButton"),
        addThoughtFolderButton: $("addThoughtFolderButton"),
        thoughtBreadcrumbs: $("thoughtBreadcrumbs"),
        thoughtEmpty: $("thoughtEmpty"),
        thoughtList: $("thoughtList"),

        backFromThoughtFolderEditor: $("backFromThoughtFolderEditor"),
        thoughtFolderName: $("thoughtFolderName"),
        thoughtFolderError: $("thoughtFolderError"),
        saveThoughtFolderButton: $("saveThoughtFolderButton"),
        deleteThoughtFolderButton: $("deleteThoughtFolderButton"),

        backFromThoughtEditor: $("backFromThoughtEditor"),
        thoughtToolsButton: $("thoughtToolsButton"),
        thoughtToolsMenu: $("thoughtToolsMenu"),
        thoughtPdfButton: $("thoughtPdfButton"),
        thoughtColor: $("thoughtColor"),
        thoughtTitle: $("thoughtTitle"),
        thoughtBody: $("thoughtBody"),
        thoughtFolderSelect: $("thoughtFolderSelect"),
        thoughtSaveState: $("thoughtSaveState"),
        deleteThoughtButton: $("deleteThoughtButton"),

        backFromDayList: $("backFromDayList"),
        addDayButton: $("addDayButton"),
        dayEmpty: $("dayEmpty"),
        dayList: $("dayList"),

        backFromDayEditor: $("backFromDayEditor"),
        dayPdfButton: $("dayPdfButton"),
        dayDate: $("dayDate"),
        dayTitle: $("dayTitle"),
        dayMood: $("dayMood"),
        dayBody: $("dayBody"),
        dayReflection: $("dayReflection"),
        daySaveState: $("daySaveState"),
        deleteDayButton: $("deleteDayButton"),

        backFromDreamList: $("backFromDreamList"),
        addDreamButton: $("addDreamButton"),
        dreamEmpty: $("dreamEmpty"),
        dreamList: $("dreamList"),

        backFromDreamEditor: $("backFromDreamEditor"),
        dreamPdfButton: $("dreamPdfButton"),
        dreamDate: $("dreamDate"),
        dreamTitle: $("dreamTitle"),
        dreamManifest: $("dreamManifest"),
        dreamAffect: $("dreamAffect"),
        dreamDayResidue: $("dreamDayResidue"),
        dreamAssociations: $("dreamAssociations"),
        dreamCondensation: $("dreamCondensation"),
        dreamDisplacement: $("dreamDisplacement"),
        dreamWishConflict: $("dreamWishConflict"),
        dreamInterpretation: $("dreamInterpretation"),
        dreamSaveState: $("dreamSaveState"),
        deleteDreamButton: $("deleteDreamButton"),

        backFromReviewLibrary: $("backFromReviewLibrary"),
        reviewLibraryTitle: $("reviewLibraryTitle"),
        addReviewEntryButton: $("addReviewEntryButton"),
        reviewBreadcrumbs: $("reviewBreadcrumbs"),
        addFolderButton: $("addFolderButton"),
        reviewSortSelect: $("reviewSortSelect"),
        reviewLibraryEmpty: $("reviewLibraryEmpty"),
        reviewLibraryList: $("reviewLibraryList"),

        backFromFolderEditor: $("backFromFolderEditor"),
        folderName: $("folderName"),
        folderError: $("folderError"),
        saveFolderButton: $("saveFolderButton"),
        deleteFolderButton: $("deleteFolderButton"),

        backFromReviewEditor: $("backFromReviewEditor"),
        reviewEditorHeading: $("reviewEditorHeading"),
        reviewPdfButton: $("reviewPdfButton"),
        reviewEntryTitle: $("reviewEntryTitle"),
        reviewEntryRating: $("reviewEntryRating"),
        reviewEntrySummary: $("reviewEntrySummary"),
        reviewEntryInterpretation: $("reviewEntryInterpretation"),
        reviewEntryReview: $("reviewEntryReview"),
        reviewEntryFolder: $("reviewEntryFolder"),
        reviewEntryError: $("reviewEntryError"),
        saveReviewEntryButton: $("saveReviewEntryButton"),
        deleteReviewEntryButton: $("deleteReviewEntryButton")
    };


    // ==================================================
    // STATE
    // ==================================================

    const APP_KEY = "personalPlannerSuite_v4";
    const OLD_APP_KEY = "personalPlannerSuite_v3";
    const OLDER_APP_KEY = "personalPlannerSuite_v2";
    const OLDEST_APP_KEY = "personalPlannerSuite_v1";
    const LEGACY_PLANS_KEY = "plans";

    let state = loadState();

    let draftPlan = null;
    let editingPlanId = null;

    let sessionPlan = null;
    let sessionIndex = 0;
    let sessionEndTime = null;
    let sessionInterval = null;
    let sessionItemDurationMs = 0;
    let sessionCompletionPending = false;
    let sessionCompleting = false;
    let sessionPlanFinishedPending = false;
    let completionQuote = null;

    let universeParticles = [];
    let universeNodes = [];
    let universeObserverIndex = 0;
    let universeExpansionModel = 0;
    let universeFrameHandle = null;
    let universeManualProgress = null;
    let universeLastRendered = [];
    let universeObserverPulseUntil = 0;
    let universeSeed = 0;

    let currentThoughtFolderId = null;
    let currentThoughtId = null;
    let currentThoughtFolderEditId = null;
    let thoughtSaveTimer = null;
    let savedThoughtRange = null;

    let currentDayId = null;
    let daySaveTimer = null;

    let currentDreamId = null;
    let dreamSaveTimer = null;

    let reviewKind = "films";
    let currentReviewFolderId = null;
    let currentReviewEntryId = null;
    let currentFolderEditId = null;



    // ==================================================
    // HELPERS
    // ==================================================

    function createId() {
        if (
            typeof crypto !== "undefined"
            &&
            typeof crypto.randomUUID === "function"
        ) {
            return crypto.randomUUID();
        }

        return (
            Date.now().toString(36)
            +
            "-"
            +
            Math.random().toString(36).slice(2)
        );
    }


    function nowIso() {
        return new Date().toISOString();
    }


    function localDateValue(date = new Date()) {
        const offset =
            date.getTimezoneOffset();

        const local =
            new Date(
                date.getTime()
                -
                offset * 60 * 1000
            );

        return local
            .toISOString()
            .slice(0, 10);
    }


    function clone(value) {
        return JSON.parse(JSON.stringify(value));
    }


    function validPositiveNumber(value) {
        const number = Number(value);

        if (
            !Number.isFinite(number)
            ||
            number <= 0
        ) {
            return null;
        }

        return number;
    }


    function activeScreen() {
        return document.querySelector(".screen.active");
    }


    function showScreen(screen) {
        Object.values(screens).forEach(item => {
            item.classList.remove("active");
        });

        screen.classList.add("active");
        window.scrollTo(0, 0);

        renderMiniSession();
    }


    function setError(element, message = "") {
        element.textContent = message;
    }


    function formatDate(isoOrDate) {
        if (!isoOrDate) {
            return "";
        }

        try {
            const date =
                isoOrDate.length === 10
                    ? new Date(`${isoOrDate}T12:00:00`)
                    : new Date(isoOrDate);

            return new Intl.DateTimeFormat(
                "de-DE",
                {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric"
                }
            ).format(date);
        } catch {
            return "";
        }
    }


    function formatDuration(minutes) {
        const value = Number(minutes) || 0;
        const hours = Math.floor(value / 60);
        const rest = value % 60;

        if (hours === 0) {
            return `${rest} min`;
        }

        if (rest === 0) {
            return `${hours} h`;
        }

        return `${hours} h ${rest} min`;
    }


    function formatCountdown(milliseconds) {
        const totalSeconds = Math.max(
            0,
            Math.ceil(milliseconds / 1000)
        );

        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;

        return (
            String(minutes).padStart(2, "0")
            +
            ":"
            +
            String(seconds).padStart(2, "0")
        );
    }


    function escapeHtml(value) {
        return String(value ?? "")
            .replaceAll("&", "&amp;")
            .replaceAll("<", "&lt;")
            .replaceAll(">", "&gt;")
            .replaceAll('"', "&quot;")
            .replaceAll("'", "&#039;");
    }


    function textToHtml(value) {
        return escapeHtml(value).replaceAll("\n", "<br>");
    }


    function firstLine(text) {
        return String(text ?? "")
            .split("\n")
            .map(line => line.trim())
            .find(Boolean)
            ??
            "";
    }


    // ==================================================
    // STORAGE + MIGRATION
    // ==================================================

    function defaultState() {
        return {
            version: 4,
            plans: [],
            thoughts: [],
            days: [],
            dreams: [],
            films: {
                entries: []
            },
            books: {
                entries: []
            },
            settings: {
                theme: "light"
            }
        };
    }


    function normalizePlan(plan) {
        return {
            id: plan.id ?? createId(),
            name: String(plan.name ?? "").trim(),
            active: Boolean(plan.active),

            items: Array.isArray(plan.items)
                ? plan.items.map(item => ({
                    id: item.id ?? createId(),
                    type: item.type === "break"
                        ? "break"
                        : "task",
                    name: item.type === "break"
                        ? ""
                        : String(item.name ?? "").trim(),
                    duration: validPositiveNumber(item.duration) ?? 1,
                    note: item.type === "break"
                        ? ""
                        : String(item.note ?? "")
                }))
                : []
        };
    }


    function plainTextToHtml(text) {
        return escapeHtml(
            String(text ?? "")
        ).replaceAll(
            "\n",
            "<br>"
        );
    }


    function sanitizeRichHtml(html) {
        const template =
            document.createElement(
                "template"
            );

        template.innerHTML =
            String(html ?? "");

        const allowedTags =
            new Set([
                "DIV",
                "P",
                "BR",
                "SPAN",
                "B",
                "STRONG",
                "U",
                "FONT"
            ]);

        const cleanNode =
            node => {
                Array.from(
                    node.children
                ).forEach(
                    child => {
                        if (
                            !allowedTags.has(
                                child.tagName
                            )
                        ) {
                            cleanNode(
                                child
                            );

                            const fragment =
                                document.createDocumentFragment();

                            while (
                                child.firstChild
                            ) {
                                fragment.appendChild(
                                    child.firstChild
                                );
                            }

                            child.replaceWith(
                                fragment
                            );

                            return;
                        }

                        Array.from(
                            child.attributes
                        ).forEach(
                            attribute => {
                                const name =
                                    attribute.name
                                        .toLowerCase();

                                if (
                                    ![
                                        "style",
                                        "face",
                                        "size",
                                        "color"
                                    ].includes(
                                        name
                                    )
                                ) {
                                    child.removeAttribute(
                                        attribute.name
                                    );
                                }
                            }
                        );

                        if (
                            child.hasAttribute(
                                "style"
                            )
                        ) {
                            const safeStyles = [];
                            const style =
                                child.style;

                            [
                                "color",
                                "font-size",
                                "font-family",
                                "font-weight",
                                "text-decoration"
                            ].forEach(
                                property => {
                                    const value =
                                        style.getPropertyValue(
                                            property
                                        );

                                    if (value) {
                                        safeStyles.push(
                                            `${property}:${value}`
                                        );
                                    }
                                }
                            );

                            if (
                                safeStyles.length
                            ) {
                                child.setAttribute(
                                    "style",
                                    safeStyles.join(";")
                                );
                            } else {
                                child.removeAttribute(
                                    "style"
                                );
                            }
                        }

                        cleanNode(
                            child
                        );
                    }
                );
            };

        cleanNode(
            template.content
        );

        return template.innerHTML;
    }


    function normalizeThought(item) {
        const createdAt =
            item.createdAt
            ??
            nowIso();

        const type =
            item.type === "folder"
                ? "folder"
                : "thought";

        return {
            id: item.id ?? createId(),
            type,
            parentId:
                item.parentId
                ??
                null,
            title:
                String(
                    item.title
                    ??
                    ""
                ),
            bodyHtml:
                type === "thought"
                    ? sanitizeRichHtml(
                        item.bodyHtml
                        ??
                        plainTextToHtml(
                            item.body
                            ??
                            ""
                        )
                    )
                    : "",
            order:
                Number.isFinite(
                    Number(
                        item.order
                    )
                )
                    ? Number(
                        item.order
                    )
                    : 0,
            createdAt,
            updatedAt:
                item.updatedAt
                ??
                createdAt
        };
    }


    function normalizeDay(item) {
        const createdAt =
            item.createdAt
            ??
            nowIso();

        return {
            id: item.id ?? createId(),
            date:
                String(item.date ?? "")
                ||
                localDateValue(),
            title: String(item.title ?? ""),
            mood:
                item.mood === null
                ||
                item.mood === undefined
                ||
                item.mood === ""
                    ? null
                    : Math.min(
                        5,
                        Math.max(
                            1,
                            Number(item.mood)
                        )
                    ),
            body: String(item.body ?? ""),
            reflection:
                String(item.reflection ?? ""),
            createdAt,
            updatedAt:
                item.updatedAt
                ??
                createdAt
        };
    }


    function normalizeDream(item) {
        const createdAt =
            item.createdAt
            ??
            nowIso();

        return {
            id: item.id ?? createId(),
            date:
                String(item.date ?? "")
                ||
                localDateValue(),
            title: String(item.title ?? ""),
            manifest:
                String(item.manifest ?? ""),
            affect:
                String(item.affect ?? ""),
            dayResidue:
                String(item.dayResidue ?? ""),
            associations:
                String(item.associations ?? ""),
            condensation:
                String(item.condensation ?? ""),
            displacement:
                String(item.displacement ?? ""),
            wishConflict:
                String(item.wishConflict ?? ""),
            interpretation:
                String(item.interpretation ?? ""),
            createdAt,
            updatedAt:
                item.updatedAt
                ??
                createdAt
        };
    }


    function normalizeLibraryEntry(item) {
        const createdAt =
            item.createdAt
            ??
            nowIso();

        const type =
            item.type === "folder"
                ? "folder"
                : "review";

        return {
            id: item.id ?? createId(),
            type,
            parentId:
                item.parentId
                ??
                null,
            title: String(item.title ?? ""),
            rating:
                type === "review"
                &&
                validPositiveNumber(item.rating)
                    ? Math.min(
                        10,
                        Math.max(
                            1,
                            Number(item.rating)
                        )
                    )
                    : null,
            summary:
                type === "review"
                    ? String(item.summary ?? "")
                    : "",
            interpretation:
                type === "review"
                    ? String(item.interpretation ?? "")
                    : "",
            review:
                type === "review"
                    ? String(item.review ?? "")
                    : "",
            order:
                Number.isFinite(Number(item.order))
                    ? Number(item.order)
                    : 0,
            createdAt,
            updatedAt:
                item.updatedAt
                ??
                createdAt
        };
    }


    function dedupeById(items) {
        const seen = new Set();

        return items.filter(item => {
            if (seen.has(item.id)) {
                return false;
            }

            seen.add(item.id);
            return true;
        });
    }


    function normalizeState(raw) {
        const clean =
            defaultState();

        if (
            !raw
            ||
            typeof raw !== "object"
        ) {
            return clean;
        }

        clean.plans =
            Array.isArray(raw.plans)
                ? raw.plans.map(normalizePlan)
                : [];

        const oldNotes =
            Array.isArray(raw.notes)
                ? raw.notes.map(normalizeThought)
                : [];

        const oldThoughts =
            Array.isArray(raw.thoughts)
                ? raw.thoughts.map(normalizeThought)
                : [];

        clean.thoughts =
            dedupeById(
                [
                    ...oldThoughts,
                    ...oldNotes
                ]
            );

        clean.days =
            Array.isArray(raw.days)
                ? raw.days.map(normalizeDay)
                : [];

        clean.dreams =
            Array.isArray(raw.dreams)
                ? raw.dreams.map(normalizeDream)
                : [];

        clean.films.entries =
            Array.isArray(raw.films?.entries)
                ? raw.films.entries.map(normalizeLibraryEntry)
                : [];

        clean.books.entries =
            Array.isArray(raw.books?.entries)
                ? raw.books.entries.map(normalizeLibraryEntry)
                : [];

        clean.settings.theme =
            raw.settings?.theme === "dark"
                ? "dark"
                : "light";

        let activeSeen = false;

        clean.plans.forEach(plan => {
            if (
                plan.active
                &&
                !activeSeen
            ) {
                activeSeen = true;
            } else if (plan.active) {
                plan.active = false;
            }
        });

        return clean;
    }


    function loadState() {
        try {
            const current =
                localStorage.getItem(APP_KEY);

            if (current) {
                return normalizeState(
                    JSON.parse(current)
                );
            }

            const old =
                localStorage.getItem(OLD_APP_KEY);

            if (old) {
                return normalizeState(
                    JSON.parse(old)
                );
            }

            const older =
                localStorage.getItem(OLDER_APP_KEY);

            if (older) {
                return normalizeState(
                    JSON.parse(older)
                );
            }

            const oldest =
                localStorage.getItem(OLDEST_APP_KEY);

            if (oldest) {
                return normalizeState(
                    JSON.parse(oldest)
                );
            }

            const initial =
                defaultState();

            const legacyPlans =
                localStorage.getItem(
                    LEGACY_PLANS_KEY
                );

            if (legacyPlans) {
                try {
                    const parsed =
                        JSON.parse(
                            legacyPlans
                        );

                    if (Array.isArray(parsed)) {
                        initial.plans =
                            parsed.map(
                                normalizePlan
                            );
                    }
                } catch {
                    // Nur beschädigte Alt-Daten werden ignoriert.
                }
            }

            return normalizeState(initial);

        } catch (error) {
            console.error(
                "Speicher konnte nicht geladen werden.",
                error
            );

            return defaultState();
        }
    }


    function saveState() {
        try {
            localStorage.setItem(
                APP_KEY,
                JSON.stringify(state)
            );

            localStorage.setItem(
                LEGACY_PLANS_KEY,
                JSON.stringify(
                    state.plans
                )
            );

            return true;

        } catch (error) {
            console.error(
                "Speichern fehlgeschlagen.",
                error
            );

            return false;
        }
    }


    // ==================================================
    // THEME
    // ==================================================

    function applyTheme() {
        document.documentElement.dataset.theme =
            state.settings.theme;

        el.themeButton.textContent =
            state.settings.theme === "dark"
                ? "Tag"
                : "Nacht";

        const meta =
            document.querySelector(
                'meta[name="theme-color"]'
            );

        if (meta) {
            meta.setAttribute(
                "content",
                state.settings.theme === "dark"
                    ? "#111210"
                    : "#f6f6f2"
            );
        }
    }


    function toggleTheme() {
        state.settings.theme =
            state.settings.theme === "dark"
                ? "light"
                : "dark";

        saveState();
        applyTheme();
    }


    // ==================================================
    // BACKUP
    // ==================================================

    function downloadBlob(blob, filename) {
        const url =
            URL.createObjectURL(blob);

        const anchor =
            document.createElement("a");

        anchor.href = url;
        anchor.download = filename;

        document.body.appendChild(anchor);
        anchor.click();
        anchor.remove();

        setTimeout(() => {
            URL.revokeObjectURL(url);
        }, 1000);
    }


    function exportBackup() {
        saveState();

        const payload = {
            format: "Planer Backup",
            version: 4,
            exportedAt: nowIso(),
            data: state
        };

        const blob =
            new Blob(
                [
                    JSON.stringify(
                        payload,
                        null,
                        2
                    )
                ],
                {
                    type:
                        "application/json;charset=utf-8"
                }
            );

        const day =
            localDateValue();

        downloadBlob(
            blob,
            `planer-backup-${day}.json`
        );
    }


    function resetTransientState() {
        draftPlan = null;
        editingPlanId = null;

        stopSessionInterval();

        sessionPlan = null;
        sessionIndex = 0;
        sessionEndTime = null;
        sessionItemDurationMs = 0;
        sessionCompletionPending = false;
        sessionCompleting = false;
        sessionPlanFinishedPending = false;
        completionQuote = null;

        universeParticles = [];
        universeNodes = [];
        universeObserverIndex = 0;
        universeManualProgress = null;
        universeLastRendered = [];

        if (universeFrameHandle !== null) {
            cancelAnimationFrame(
                universeFrameHandle
            );

            universeFrameHandle = null;
        }

        currentThoughtFolderId = null;
        currentThoughtId = null;
        currentThoughtFolderEditId = null;
        currentDayId = null;
        currentDreamId = null;

        reviewKind = "films";
        currentReviewFolderId = null;
        currentReviewEntryId = null;
        currentFolderEditId = null;
    }


    function importBackupFile(file) {
        if (!file) {
            return;
        }

        const reader =
            new FileReader();

        reader.onload = () => {
            try {
                const parsed =
                    JSON.parse(
                        String(
                            reader.result
                        )
                    );

                const source =
                    parsed?.data
                    ??
                    parsed;

                const imported =
                    normalizeState(source);

                const confirmed =
                    window.confirm(
                        "Aktuelle Daten durch dieses Backup ersetzen?"
                    );

                if (!confirmed) {
                    return;
                }

                state = imported;

                saveState();
                applyTheme();

                resetTransientState();
                showScreen(screens.home);

                alert(
                    "Backup wiederhergestellt."
                );

            } catch (error) {
                console.error(error);

                alert(
                    "Backup konnte nicht gelesen werden."
                );

            } finally {
                el.backupFileInput.value =
                    "";
            }
        };

        reader.readAsText(file);
    }


    // ==================================================
    // PDF / PRINT
    // ==================================================

    function exportPrintableDocument(
        title,
        sections
    ) {
        const printWindow =
            window.open(
                "",
                "_blank"
            );

        if (!printWindow) {
            alert(
                "PDF-Fenster konnte nicht geöffnet werden."
            );

            return;
        }

        const body =
            sections
                .filter(
                    section =>
                        String(
                            section.text
                            ??
                            ""
                        ).trim() !== ""
                )
                .map(
                    section => `
                        <section>
                            ${
                                section.heading
                                    ? `<h2>${escapeHtml(section.heading)}</h2>`
                                    : ""
                            }
                            <div>${textToHtml(section.text)}</div>
                        </section>
                    `
                )
                .join("");

        printWindow.document.write(`
            <!DOCTYPE html>
            <html lang="de">
            <head>
                <meta charset="UTF-8">
                <title>${escapeHtml(title || "Text")}</title>
                <style>
                    @page {
                        size: A4;
                        margin: 22mm 20mm;
                    }

                    body {
                        margin: 0;
                        color: #111;
                        font-family:
                            -apple-system,
                            BlinkMacSystemFont,
                            "Helvetica Neue",
                            Arial,
                            sans-serif;
                        font-size: 11.5pt;
                        line-height: 1.55;
                    }

                    h1 {
                        margin: 0 0 26px;
                        font-size: 23pt;
                        font-weight: 600;
                    }

                    h2 {
                        margin: 26px 0 8px;
                        font-size: 12pt;
                        font-weight: 600;
                    }
                </style>
            </head>
            <body>
                <h1>${escapeHtml(title || "Text")}</h1>
                ${body}

                <script>
                    window.onload = () => {
                        setTimeout(() => {
                            window.print();
                        }, 150);
                    };
                <\/script>
            </body>
            </html>
        `);

        printWindow.document.close();
    }


    function exportPrintableRichDocument(
        title,
        richHtml
    ) {
        const printWindow =
            window.open(
                "",
                "_blank"
            );

        if (!printWindow) {
            alert(
                "PDF-Fenster konnte nicht geöffnet werden."
            );

            return;
        }

        const safeHtml =
            sanitizeRichHtml(
                richHtml
            );

        printWindow.document.write(`
            <!DOCTYPE html>
            <html lang="de">
            <head>
                <meta charset="UTF-8">
                <title>${escapeHtml(title || "Gedanke")}</title>
                <style>
                    @page {
                        size: A4;
                        margin: 22mm 20mm;
                    }

                    body {
                        margin: 0;
                        color: #111;
                        font-family:
                            -apple-system,
                            BlinkMacSystemFont,
                            "Helvetica Neue",
                            Arial,
                            sans-serif;
                        font-size: 11.5pt;
                        line-height: 1.6;
                    }

                    h1 {
                        margin: 0 0 28px;
                        font-size: 23pt;
                        font-weight: 600;
                    }

                    .content {
                        overflow-wrap: anywhere;
                    }
                </style>
            </head>
            <body>
                <h1>${escapeHtml(title || "Gedanke")}</h1>
                <div class="content">${safeHtml}</div>

                <script>
                    window.onload = () => {
                        setTimeout(() => {
                            window.print();
                        }, 150);
                    };
                <\/script>
            </body>
            </html>
        `);

        printWindow.document.close();
    }


    // ==================================================
    // HOME
    // ==================================================

    el.openPlannerButton.addEventListener(
        "click",
        () => {
            showScreen(
                screens.plannerHub
            );
        }
    );

    el.openTextsButton.addEventListener(
        "click",
        () => {
            el.textsMenuPanel.classList.add(
                "hidden"
            );

            showScreen(
                screens.textsHub
            );
        }
    );

    el.backFromPlannerHub.addEventListener(
        "click",
        () => {
            showScreen(
                screens.home
            );
        }
    );

    el.backFromTextsHub.addEventListener(
        "click",
        () => {
            showScreen(
                screens.home
            );
        }
    );

    el.themeButton.addEventListener(
        "click",
        toggleTheme
    );

    el.backupButton.addEventListener(
        "click",
        exportBackup
    );

    el.restoreButton.addEventListener(
        "click",
        () => {
            el.backupFileInput.click();
        }
    );

    el.backupFileInput.addEventListener(
        "change",
        () => {
            importBackupFile(
                el.backupFileInput
                    .files?.[0]
            );
        }
    );


    el.textsMenuButton.addEventListener(
        "click",
        event => {
            event.stopPropagation();

            el.textsMenuPanel.classList.toggle(
                "hidden"
            );
        }
    );


    document.addEventListener(
        "click",
        event => {
            if (
                !el.textsMenuPanel.contains(
                    event.target
                )
                &&
                event.target
                !==
                el.textsMenuButton
            ) {
                el.textsMenuPanel.classList.add(
                    "hidden"
                );
            }
        }
    );


    el.backupButton.addEventListener(
        "click",
        () => {
            el.textsMenuPanel.classList.add(
                "hidden"
            );
        }
    );


    el.restoreButton.addEventListener(
        "click",
        () => {
            el.textsMenuPanel.classList.add(
                "hidden"
            );
        }
    );


    el.themeButton.addEventListener(
        "click",
        () => {
            el.textsMenuPanel.classList.add(
                "hidden"
            );
        }
    );


    // ==================================================
    // PLANNER HUB
    // ==================================================

    el.plannerStartButton.addEventListener(
        "click",
        () => {
            renderStartOverview();

            showScreen(
                screens.startOverview
            );
        }
    );

    el.plannerPlansButton.addEventListener(
        "click",
        () => {
            renderPlans();

            showScreen(
                screens.plans
            );
        }
    );

    el.backFromStartOverview.addEventListener(
        "click",
        () => {
            showScreen(
                screens.plannerHub
            );
        }
    );

    el.backFromPlans.addEventListener(
        "click",
        () => {
            showScreen(
                screens.plannerHub
            );
        }
    );


    // ==================================================
    // PLAN LIST
    // ==================================================

    function renderPlans() {
        el.plansList.innerHTML = "";

        if (
            state.plans.length === 0
        ) {
            el.emptyPlansMessage.style.display =
                "block";

            return;
        }

        el.emptyPlansMessage.style.display =
            "none";

        state.plans.forEach(plan => {
            const row =
                document.createElement(
                    "div"
                );

            row.className =
                "plan-row";

            const main =
                document.createElement(
                    "button"
                );

            main.type = "button";
            main.className =
                "row-main-button";

            const title =
                document.createElement(
                    "div"
                );

            title.className =
                "row-title";

            title.textContent =
                plan.name;

            const subtitle =
                document.createElement(
                    "div"
                );

            subtitle.className =
                "row-subtitle";

            const totalMinutes =
                plan.items.reduce(
                    (
                        sum,
                        item
                    ) =>
                        sum
                        +
                        Number(
                            item.duration
                            ||
                            0
                        ),
                    0
                );

            subtitle.textContent =
                `${plan.items.length} Elemente · ${formatDuration(totalMinutes)}`;

            main.append(
                title,
                subtitle
            );

            main.addEventListener(
                "click",
                () => {
                    openPlanEditor(
                        plan.id
                    );
                }
            );

            const heart =
                document.createElement(
                    "button"
                );

            heart.type = "button";
            heart.className =
                "heart-button";

            heart.textContent =
                plan.active
                    ? "♥"
                    : "♡";

            heart.addEventListener(
                "click",
                () => {
                    state.plans.forEach(
                        item => {
                            item.active =
                                item.id
                                ===
                                plan.id;
                        }
                    );

                    saveState();
                    renderPlans();
                }
            );

            row.append(
                main,
                heart
            );

            el.plansList.appendChild(
                row
            );
        });
    }


    el.addPlanButton.addEventListener(
        "click",
        () => {
            editingPlanId = null;
            draftPlan = null;

            el.planName.value = "";

            setError(
                el.newPlanError
            );

            showScreen(
                screens.newPlan
            );

            setTimeout(
                () => {
                    el.planName.focus();
                },
                0
            );
        }
    );


    el.backFromNewPlan.addEventListener(
        "click",
        () => {
            showScreen(
                screens.plans
            );
        }
    );


    el.createPlanButton.addEventListener(
        "click",
        () => {
            const name =
                el.planName
                    .value
                    .trim();

            if (!name) {
                setError(
                    el.newPlanError,
                    "Name fehlt."
                );

                el.planName.focus();
                return;
            }

            draftPlan = {
                id: createId(),
                name,
                active: false,
                items: []
            };

            editingPlanId = null;

            el.deletePlanButton.style.display =
                "none";

            renderPlanEditor();

            showScreen(
                screens.planEditor
            );
        }
    );


    // ==================================================
    // PLAN EDITOR
    // ==================================================

    function openPlanEditor(planId) {
        const plan =
            state.plans.find(
                item =>
                    item.id
                    ===
                    planId
            );

        if (!plan) {
            return;
        }

        editingPlanId =
            planId;

        draftPlan =
            clone(plan);

        el.deletePlanButton.style.display =
            "block";

        renderPlanEditor();

        showScreen(
            screens.planEditor
        );
    }


    function renderPlanEditor() {
        if (!draftPlan) {
            return;
        }

        setError(
            el.editorError
        );

        el.editorPlanTitle.textContent =
            draftPlan.name
            ||
            "Plan";

        el.editorPlanName.value =
            draftPlan.name;

        el.planItems.innerHTML =
            "";

        el.emptyPlanMessage.style.display =
            draftPlan.items.length === 0
                ? "block"
                : "none";

        draftPlan.items.forEach(
            (
                item,
                index
            ) => {
                const row =
                    document.createElement(
                        "div"
                    );

                row.className =
                    "plan-item";

                const number =
                    document.createElement(
                        "div"
                    );

                number.className =
                    "item-number";

                number.textContent =
                    `${index + 1}.`;

                const info =
                    document.createElement(
                        "div"
                    );

                info.className =
                    "item-information";

                const title =
                    document.createElement(
                        "div"
                    );

                title.className =
                    "item-title";

                title.textContent =
                    item.type
                    ===
                    "break"
                        ? "Pause"
                        : item.name;

                const details =
                    document.createElement(
                        "div"
                    );

                details.className =
                    "item-details";

                details.textContent =
                    `${item.duration} Minuten`;

                if (
                    item.type
                    ===
                    "task"
                    &&
                    item.note
                ) {
                    details.textContent +=
                        ` · ${item.note}`;
                }

                info.append(
                    title,
                    details
                );

                const controls =
                    document.createElement(
                        "div"
                    );

                controls.className =
                    "item-controls";

                const up =
                    document.createElement(
                        "button"
                    );

                up.type = "button";
                up.className =
                    "move-button";

                up.textContent =
                    "↑";

                up.disabled =
                    index === 0;

                up.addEventListener(
                    "click",
                    () => {
                        movePlanItem(
                            index,
                            index - 1
                        );
                    }
                );

                const down =
                    document.createElement(
                        "button"
                    );

                down.type = "button";
                down.className =
                    "move-button";

                down.textContent =
                    "↓";

                down.disabled =
                    index
                    ===
                    draftPlan.items.length
                    -
                    1;

                down.addEventListener(
                    "click",
                    () => {
                        movePlanItem(
                            index,
                            index + 1
                        );
                    }
                );

                const remove =
                    document.createElement(
                        "button"
                    );

                remove.type =
                    "button";

                remove.className =
                    "delete-item-button";

                remove.textContent =
                    "×";

                remove.addEventListener(
                    "click",
                    () => {
                        draftPlan.items.splice(
                            index,
                            1
                        );

                        renderPlanEditor();
                    }
                );

                controls.append(
                    up,
                    down,
                    remove
                );

                row.append(
                    number,
                    info,
                    controls
                );

                el.planItems.appendChild(
                    row
                );
            }
        );
    }


    function movePlanItem(
        from,
        to
    ) {
        if (
            !draftPlan
            ||
            to < 0
            ||
            to
            >=
            draftPlan.items.length
        ) {
            return;
        }

        const [moved] =
            draftPlan.items.splice(
                from,
                1
            );

        draftPlan.items.splice(
            to,
            0,
            moved
        );

        renderPlanEditor();
    }


    el.editorPlanName.addEventListener(
        "input",
        () => {
            if (!draftPlan) {
                return;
            }

            draftPlan.name =
                el.editorPlanName.value;

            el.editorPlanTitle.textContent =
                draftPlan.name.trim()
                ||
                "Plan";
        }
    );


    el.backFromEditor.addEventListener(
        "click",
        () => {
            const leave =
                window.confirm(
                    "Änderungen verwerfen?"
                );

            if (!leave) {
                return;
            }

            draftPlan = null;
            editingPlanId = null;

            renderPlans();

            showScreen(
                screens.plans
            );
        }
    );


    el.addTaskButton.addEventListener(
        "click",
        () => {
            el.taskName.value = "";
            el.taskDuration.value = "";
            el.taskNote.value = "";

            setError(
                el.taskError
            );

            showScreen(
                screens.task
            );

            setTimeout(
                () => {
                    el.taskName.focus();
                },
                0
            );
        }
    );


    el.backFromTask.addEventListener(
        "click",
        () => {
            showScreen(
                screens.planEditor
            );
        }
    );


    el.saveTaskButton.addEventListener(
        "click",
        () => {
            if (!draftPlan) {
                return;
            }

            const name =
                el.taskName
                    .value
                    .trim();

            const duration =
                validPositiveNumber(
                    el.taskDuration.value
                );

            if (!name) {
                setError(
                    el.taskError,
                    "Name fehlt."
                );

                el.taskName.focus();
                return;
            }

            if (!duration) {
                setError(
                    el.taskError,
                    "Dauer fehlt."
                );

                el.taskDuration.focus();
                return;
            }

            draftPlan.items.push({
                id: createId(),
                type: "task",
                name,
                duration,
                note:
                    el.taskNote
                        .value
                        .trim()
            });

            renderPlanEditor();

            showScreen(
                screens.planEditor
            );
        }
    );


    el.addBreakButton.addEventListener(
        "click",
        () => {
            el.breakDuration.value =
                "";

            setError(
                el.breakError
            );

            showScreen(
                screens.break
            );

            setTimeout(
                () => {
                    el.breakDuration.focus();
                },
                0
            );
        }
    );


    el.backFromBreak.addEventListener(
        "click",
        () => {
            showScreen(
                screens.planEditor
            );
        }
    );


    el.saveBreakButton.addEventListener(
        "click",
        () => {
            if (!draftPlan) {
                return;
            }

            const duration =
                validPositiveNumber(
                    el.breakDuration.value
                );

            if (!duration) {
                setError(
                    el.breakError,
                    "Dauer fehlt."
                );

                el.breakDuration.focus();
                return;
            }

            draftPlan.items.push({
                id: createId(),
                type: "break",
                name: "",
                duration,
                note: ""
            });

            renderPlanEditor();

            showScreen(
                screens.planEditor
            );
        }
    );


    el.savePlanButton.addEventListener(
        "click",
        () => {
            if (!draftPlan) {
                return;
            }

            const name =
                el.editorPlanName
                    .value
                    .trim();

            if (!name) {
                setError(
                    el.editorError,
                    "Name fehlt."
                );

                el.editorPlanName.focus();
                return;
            }

            if (
                draftPlan.items.length
                ===
                0
            ) {
                setError(
                    el.editorError,
                    "Der Plan ist leer."
                );

                return;
            }

            draftPlan.name =
                name;

            if (
                editingPlanId
                ===
                null
            ) {
                state.plans.push(
                    clone(
                        draftPlan
                    )
                );

            } else {
                const index =
                    state.plans.findIndex(
                        item =>
                            item.id
                            ===
                            editingPlanId
                    );

                if (
                    index
                    !==
                    -1
                ) {
                    state.plans[index] =
                        clone(
                            draftPlan
                        );
                }
            }

            if (!saveState()) {
                setError(
                    el.editorError,
                    "Speichern fehlgeschlagen."
                );

                return;
            }

            draftPlan = null;
            editingPlanId = null;

            renderPlans();

            showScreen(
                screens.plans
            );
        }
    );


    el.deletePlanButton.addEventListener(
        "click",
        () => {
            if (
                editingPlanId
                ===
                null
            ) {
                return;
            }

            const confirmed =
                window.confirm(
                    "Plan löschen?"
                );

            if (!confirmed) {
                return;
            }

            state.plans =
                state.plans.filter(
                    item =>
                        item.id
                        !==
                        editingPlanId
                );

            saveState();

            draftPlan = null;
            editingPlanId = null;

            renderPlans();

            showScreen(
                screens.plans
            );
        }
    );


    // ==================================================
    // START OVERVIEW
    // ==================================================

    function renderStartOverview() {
        const active =
            state.plans.find(
                plan =>
                    plan.active
            );

        el.startPlanItems.innerHTML =
            "";

        if (!active) {
            el.startPlanTitle.textContent =
                "Start";

            el.noActivePlanMessage.style.display =
                "block";

            el.activePlanOverview.style.display =
                "none";

            return;
        }

        el.noActivePlanMessage.style.display =
            "none";

        el.activePlanOverview.style.display =
            "block";

        el.startPlanTitle.textContent =
            active.name;

        let total = 0;

        active.items.forEach(
            (
                item,
                index
            ) => {
                total +=
                    Number(
                        item.duration
                        ||
                        0
                    );

                const row =
                    document.createElement(
                        "div"
                    );

                row.className =
                    "start-plan-item";

                if (
                    item.type
                    ===
                    "break"
                ) {
                    row.classList.add(
                        "break"
                    );
                }

                const left =
                    document.createElement(
                        "div"
                    );

                left.className =
                    "start-item-left";

                const number =
                    document.createElement(
                        "span"
                    );

                number.className =
                    "start-item-number";

                number.textContent =
                    `${index + 1}.`;

                const name =
                    document.createElement(
                        "span"
                    );

                name.className =
                    "start-item-name";

                name.textContent =
                    item.type
                    ===
                    "break"
                        ? "Pause"
                        : item.name;

                const duration =
                    document.createElement(
                        "span"
                    );

                duration.className =
                    "start-item-duration";

                duration.textContent =
                    formatDuration(
                        item.duration
                    );

                left.append(
                    number,
                    name
                );

                row.append(
                    left,
                    duration
                );

                el.startPlanItems.appendChild(
                    row
                );
            }
        );

        el.totalPlanDuration.textContent =
            formatDuration(
                total
            );
    }


    el.goButton.addEventListener(
        "click",
        () => {
            if (sessionPlan) {
                if (sessionPlanFinishedPending) {
                    showPlanCompletion();
                } else if (sessionCompletionPending) {
                    openSessionReview();
                } else {
                    showScreen(
                        screens.session
                    );

                    updateSessionTimer();
                }

                return;
            }

            const active =
                state.plans.find(
                    plan =>
                        plan.active
                );

            if (
                !active
                ||
                active.items.length
                ===
                0
            ) {
                return;
            }

            startSession(
                active
            );
        }
    );


    // ==================================================
    // SESSION — EXPANDIERENDES UNIVERSUM
    // ==================================================

    const COMPLETION_QUOTES = [
            {
                    "quote": "Werde nicht bloß besser; werde genauer darin, wer du sein willst.",
                    "source": "Friedrich Nietzsche · sinngemäß nach Also sprach Zarathustra"
            },
            {
                    "quote": "Wer immer Schüler bleibt, hat den Lehrer noch nicht verstanden.",
                    "source": "Friedrich Nietzsche · sinngemäß nach Also sprach Zarathustra"
            },
            {
                    "quote": "Ein Gedanke gewinnt Gewicht, wenn du ihn im Leben riskierst.",
                    "source": "Friedrich Nietzsche · sinngemäß nach Also sprach Zarathustra"
            },
            {
                    "quote": "Chaos ist nicht nur Unordnung; manchmal ist es Material für einen Stern.",
                    "source": "Friedrich Nietzsche · sinngemäß nach Also sprach Zarathustra"
            },
            {
                    "quote": "Die gefährlichste Bequemlichkeit ist ein fremdes Ideal, das sich wie das eigene anfühlt.",
                    "source": "Friedrich Nietzsche · sinngemäß nach Jenseits von Gut und Böse"
            },
            {
                    "quote": "Misstraue Wahrheiten, die nie einen Preis von dir verlangen.",
                    "source": "Friedrich Nietzsche · sinngemäß nach Jenseits von Gut und Böse"
            },
            {
                    "quote": "Eine Moral verrät viel darüber, wovor ihre Urheber Angst hatten.",
                    "source": "Friedrich Nietzsche · sinngemäß nach Zur Genealogie der Moral"
            },
            {
                    "quote": "Manche Gewissheiten sind nur sehr alte Gewohnheiten.",
                    "source": "Friedrich Nietzsche · sinngemäß nach Die fröhliche Wissenschaft"
            },
            {
                    "quote": "Der freie Geist braucht weniger Geländer als gute Beine.",
                    "source": "Friedrich Nietzsche · sinngemäß nach Menschliches, Allzumenschliches"
            },
            {
                    "quote": "Auch Ernst kann eine Form von Eitelkeit sein; tanzen hilft.",
                    "source": "Friedrich Nietzsche · sinngemäß nach Also sprach Zarathustra"
            },
            {
                    "quote": "Die Frage ist nicht nur, was wahr ist, sondern was eine Wahrheit mit uns macht.",
                    "source": "Friedrich Nietzsche · sinngemäß nach Jenseits von Gut und Böse"
            },
            {
                    "quote": "Ein Stil ist eine Entscheidung darüber, was man weglässt.",
                    "source": "Friedrich Nietzsche · sinngemäß nach Ecce Homo"
            },
            {
                    "quote": "Wer sich selbst überwinden will, braucht zuerst etwas, das Widerstand leistet.",
                    "source": "Friedrich Nietzsche · sinngemäß nach Also sprach Zarathustra"
            },
            {
                    "quote": "Vielleicht ist das Gegenteil einer tiefen Wahrheit ebenfalls nicht ganz oberflächlich.",
                    "source": "Friedrich Nietzsche · sinngemäß nach Jenseits von Gut und Böse"
            },
            {
                    "quote": "Der Körper denkt oft früher als das Bewusstsein.",
                    "source": "Friedrich Nietzsche · sinngemäß nach Also sprach Zarathustra"
            },
            {
                    "quote": "Eine gute Frage kann wertvoller sein als zehn beruhigende Antworten.",
                    "source": "Friedrich Nietzsche · sinngemäß nach Die fröhliche Wissenschaft"
            },
            {
                    "quote": "Das Leben rechtfertigt sich nicht durch Sicherheit, sondern durch Intensität.",
                    "source": "Friedrich Nietzsche · sinngemäß nach Die Geburt der Tragödie"
            },
            {
                    "quote": "Wer nur gegen etwas kämpft, riskiert, ihm ähnlich zu werden.",
                    "source": "Friedrich Nietzsche · sinngemäß nach Jenseits von Gut und Böse"
            },
            {
                    "quote": "Musik kann einen Gedanken sagen, bevor Sprache ihn eingeholt hat.",
                    "source": "Friedrich Nietzsche · sinngemäß nach Die Geburt der Tragödie"
            },
            {
                    "quote": "Der Horizont wächst manchmal erst, wenn eine alte Gewissheit untergeht.",
                    "source": "Friedrich Nietzsche · sinngemäß nach Die fröhliche Wissenschaft"
            },
            {
                    "quote": "Richtiges Leben beginnt dort, wo Menschen nicht mehr zu Funktionen gemacht werden.",
                    "source": "Theodor W. Adorno · sinngemäß nach Minima Moralia"
            },
            {
                    "quote": "Die bequemste Unterhaltung ist oft die, die uns vergessen lässt, dass sie uns formt.",
                    "source": "Theodor W. Adorno · sinngemäß nach Dialektik der Aufklärung"
            },
            {
                    "quote": "Kritik heißt, dem scheinbar Selbstverständlichen seine Geschichte zurückzugeben.",
                    "source": "Theodor W. Adorno · sinngemäß nach Negative Dialektik"
            },
            {
                    "quote": "Ein Begriff ist nützlich, solange er nicht behauptet, die Sache vollständig zu besitzen.",
                    "source": "Theodor W. Adorno · sinngemäß nach Negative Dialektik"
            },
            {
                    "quote": "Kunst wird interessant, wenn sie sich weigert, bloß angenehm zu funktionieren.",
                    "source": "Theodor W. Adorno · sinngemäß nach Ästhetische Theorie"
            },
            {
                    "quote": "Fortschritt wäre auch: weniger Gründe, Angst zu haben.",
                    "source": "Theodor W. Adorno · sinngemäß nach Minima Moralia"
            },
            {
                    "quote": "Das Ganze erklärt viel und entschuldigt nichts.",
                    "source": "Theodor W. Adorno · sinngemäß nach Minima Moralia"
            },
            {
                    "quote": "Wer nur effizient denkt, denkt irgendwann wie die Maschine, die er bedienen wollte.",
                    "source": "Theodor W. Adorno · sinngemäß nach Dialektik der Aufklärung"
            },
            {
                    "quote": "Widerspruch ist kein Defekt des Denkens; manchmal ist er sein ehrlichster Zustand.",
                    "source": "Theodor W. Adorno · sinngemäß nach Negative Dialektik"
            },
            {
                    "quote": "Ein Werk darf schwieriger sein als der Markt, der es verkaufen möchte.",
                    "source": "Theodor W. Adorno · sinngemäß nach Ästhetische Theorie"
            },
            {
                    "quote": "Bildung verliert ihren Sinn, wenn sie nur noch als Eintrittskarte zählt.",
                    "source": "Theodor W. Adorno · sinngemäß nach Theorie der Halbbildung"
            },
            {
                    "quote": "Das Banale wird mächtig, wenn niemand mehr bemerkt, dass es banal ist.",
                    "source": "Theodor W. Adorno · sinngemäß nach Minima Moralia"
            },
            {
                    "quote": "Die Gesellschaft steckt auch in den intimsten Gewohnheiten.",
                    "source": "Theodor W. Adorno · sinngemäß nach Minima Moralia"
            },
            {
                    "quote": "Versöhnung wäre nicht Gleichheit, sondern ein Zustand, in dem Verschiedenheit nicht bedroht.",
                    "source": "Theodor W. Adorno · sinngemäß nach Negative Dialektik"
            },
            {
                    "quote": "Gute Kunst bestätigt die Welt nicht; sie macht ihre Risse hörbar.",
                    "source": "Theodor W. Adorno · sinngemäß nach Philosophie der neuen Musik"
            },
            {
                    "quote": "Denken beginnt dort, wo die fertige Kategorie nicht mehr genügt.",
                    "source": "Theodor W. Adorno · sinngemäß nach Negative Dialektik"
            },
            {
                    "quote": "Auch Geschmack hat eine Gesellschaftsgeschichte.",
                    "source": "Theodor W. Adorno · sinngemäß nach Kulturkritik und Gesellschaft"
            },
            {
                    "quote": "Wer alles sofort versteht, hat vielleicht nur das Bekannte wiedererkannt.",
                    "source": "Theodor W. Adorno · sinngemäß nach Ästhetische Theorie"
            },
            {
                    "quote": "Erinnerung ist politisch, sobald Vergessen bequem wird.",
                    "source": "Theodor W. Adorno · sinngemäß nach Erziehung nach Auschwitz"
            },
            {
                    "quote": "Freiheit zeigt sich nicht darin, immer wählen zu dürfen, sondern anders leben zu können.",
                    "source": "Theodor W. Adorno · sinngemäß nach Minima Moralia"
            },
            {
                    "quote": "Ideologie funktioniert besonders gut, wenn wir sicher sind, keine Ideologie zu haben.",
                    "source": "Slavoj Žižek · sinngemäß nach The Sublime Object of Ideology"
            },
            {
                    "quote": "Manchmal ist der Zyniker der gehorsamste Untertan: Er weiß es besser und macht trotzdem weiter.",
                    "source": "Slavoj Žižek · sinngemäß nach The Sublime Object of Ideology"
            },
            {
                    "quote": "Das Problem ist nicht nur, was wir begehren, sondern wer uns beigebracht hat, es zu begehren.",
                    "source": "Slavoj Žižek · sinngemäß nach How to Read Lacan"
            },
            {
                    "quote": "Ein Ereignis ist der Moment, nach dem dieselben Fakten plötzlich etwas anderes bedeuten.",
                    "source": "Slavoj Žižek · sinngemäß nach Event"
            },
            {
                    "quote": "Die bequemste Freiheit ist die, bei der schon entschieden wurde, welche Optionen vernünftig sind.",
                    "source": "Slavoj Žižek · sinngemäß nach The Parallax View"
            },
            {
                    "quote": "Realität wird oft gerade durch die Fantasie erträglich, die wir für unrealistisch halten.",
                    "source": "Slavoj Žižek · sinngemäß nach The Plague of Fantasies"
            },
            {
                    "quote": "Kaffee ohne Koffein ist ein erstaunlich gutes Modell für Genuss ohne Konsequenzen.",
                    "source": "Slavoj Žižek · sinngemäß nach Welcome to the Desert of the Real"
            },
            {
                    "quote": "Wir wollen Veränderung — vorausgesetzt, danach bleibt alles ungefähr so bequem wie vorher.",
                    "source": "Slavoj Žižek · sinngemäß nach Living in the End Times"
            },
            {
                    "quote": "Die Pointe eines Witzes weiß manchmal mehr über Politik als eine Pressekonferenz.",
                    "source": "Slavoj Žižek · sinngemäß nach diversen Vorträgen und Schriften"
            },
            {
                    "quote": "Eine Gesellschaft erkennt man auch an den Dingen, über die sie nicht ernsthaft sprechen kann.",
                    "source": "Slavoj Žižek · sinngemäß nach Violence"
            },
            {
                    "quote": "Das Symptom ist nicht nur das Problem; oft hält es das ganze System zusammen.",
                    "source": "Slavoj Žižek · sinngemäß nach The Sublime Object of Ideology"
            },
            {
                    "quote": "Es reicht nicht, die Maske abzunehmen, wenn unter der Maske schon die nächste Maske wartet.",
                    "source": "Slavoj Žižek · sinngemäß nach The Parallax View"
            },
            {
                    "quote": "Manchmal besteht Mut darin, eine falsche Alternative überhaupt nicht zu wählen.",
                    "source": "Slavoj Žižek · sinngemäß nach In Defense of Lost Causes"
            },
            {
                    "quote": "Das Unmögliche ist häufig nur das, dessen Kosten niemand im bestehenden System tragen will.",
                    "source": "Slavoj Žižek · sinngemäß nach Less Than Nothing"
            },
            {
                    "quote": "Eine Katastrophe kann sichtbar machen, was vorher schon da war, aber als normal galt.",
                    "source": "Slavoj Žižek · sinngemäß nach Living in the End Times"
            },
            {
                    "quote": "Genuss ist verdächtig, sobald er zur Pflicht wird.",
                    "source": "Slavoj Žižek · sinngemäß nach The Metastases of Enjoyment"
            },
            {
                    "quote": "Die Wahrheit einer Position zeigt sich manchmal in dem Witz, den sie über sich selbst nicht erträgt.",
                    "source": "Slavoj Žižek · sinngemäß nach diversen Vorträgen und Schriften"
            },
            {
                    "quote": "Ein System kann Kritik lieben, solange die Kritik Teil seines Unterhaltungsprogramms bleibt.",
                    "source": "Slavoj Žižek · sinngemäß nach The Sublime Object of Ideology"
            },
            {
                    "quote": "Vielleicht sollten wir nicht schneller handeln, sondern zuerst genauer herausfinden, was unser Handeln reproduziert.",
                    "source": "Slavoj Žižek · sinngemäß nach Violence"
            },
            {
                    "quote": "Der Abgrund zwischen zwei Perspektiven verschwindet nicht immer durch einen Kompromiss.",
                    "source": "Slavoj Žižek · sinngemäß nach The Parallax View"
            },
            {
                    "quote": "Ein gutes Gedankenexperiment kostet wenig Material und kann ein ganzes Weltbild verschieben.",
                    "source": "Albert Einstein · sinngemäß nach Relativität: Die spezielle und allgemeine Theorie"
            },
            {
                    "quote": "Zeit ist nicht die Bühne der Physik; sie gehört selbst zum Stück.",
                    "source": "Albert Einstein · sinngemäß nach Zur Elektrodynamik bewegter Körper"
            },
            {
                    "quote": "Eine Theorie ist stark, wenn sie viel erklärt und wenig voraussetzt.",
                    "source": "Albert Einstein · sinngemäß nach Mein Weltbild"
            },
            {
                    "quote": "Intuition ist kein Ersatz für Mathematik, aber oft ihr erster Entwurf.",
                    "source": "Albert Einstein · sinngemäß nach Mein Weltbild"
            },
            {
                    "quote": "Der Beobachter steht nicht außerhalb der Beschreibung, die er von Bewegung macht.",
                    "source": "Albert Einstein · sinngemäß nach Zur Elektrodynamik bewegter Körper"
            },
            {
                    "quote": "Ein Problem wird interessanter, wenn die naheliegende Messgröße plötzlich vom Bezugssystem abhängt.",
                    "source": "Albert Einstein · sinngemäß nach Relativitätstheorie"
            },
            {
                    "quote": "Physik beginnt oft mit der Frage, welche Größen wirklich beobachtbar sind.",
                    "source": "Albert Einstein · sinngemäß nach frühen Arbeiten zur Relativität"
            },
            {
                    "quote": "Eleganz ist kein Beweis, aber ein bemerkenswert guter Hinweisgeber.",
                    "source": "Albert Einstein · sinngemäß nach Mein Weltbild"
            },
            {
                    "quote": "Ein Lichtstrahl ist ein erstaunlicher Gesprächspartner für ein Gedankenexperiment.",
                    "source": "Albert Einstein · sinngemäß nach autobiographischen Notizen"
            },
            {
                    "quote": "Raum und Zeit sind weniger absolut, als unser Alltag uns glauben lässt.",
                    "source": "Albert Einstein · sinngemäß nach Relativität: Die spezielle und allgemeine Theorie"
            },
            {
                    "quote": "Die Natur schuldet uns keine Anschaulichkeit.",
                    "source": "Albert Einstein · sinngemäß nach Schriften zur modernen Physik"
            },
            {
                    "quote": "Man sollte eine Sache so einfach darstellen, wie ihre Struktur es erlaubt — nicht einfacher.",
                    "source": "Albert Einstein · sinngemäß nach Schriften und Briefen"
            },
            {
                    "quote": "Neugier ist produktiver, wenn sie sich nicht zu früh von Autorität beruhigen lässt.",
                    "source": "Albert Einstein · sinngemäß nach Mein Weltbild"
            },
            {
                    "quote": "Eine Uhr misst Zeit; sie erklärt noch nicht, was Gleichzeitigkeit bedeutet.",
                    "source": "Albert Einstein · sinngemäß nach Zur Elektrodynamik bewegter Körper"
            },
            {
                    "quote": "Gravitation kann als Geometrie erscheinen, wenn man die richtige Sprache findet.",
                    "source": "Albert Einstein · sinngemäß nach Die Grundlage der allgemeinen Relativitätstheorie"
            },
            {
                    "quote": "Gute Physik verändert manchmal zuerst die Begriffe und erst danach die Gleichungen.",
                    "source": "Albert Einstein · sinngemäß nach Arbeiten zur Relativität"
            },
            {
                    "quote": "Das Staunen über die Verständlichkeit der Natur ist selbst ein philosophisches Problem.",
                    "source": "Albert Einstein · sinngemäß nach Mein Weltbild"
            },
            {
                    "quote": "Ein Bezugssystem ist kein Standpunkt Gottes, sondern ein Werkzeug.",
                    "source": "Albert Einstein · sinngemäß nach Relativitätstheorie"
            },
            {
                    "quote": "Wenn zwei Beobachter sich widersprechen, kann die Invariante interessanter sein als beide Messwerte.",
                    "source": "Albert Einstein · sinngemäß nach spezieller Relativitätstheorie"
            },
            {
                    "quote": "Manchmal besteht Fortschritt darin, eine scheinbar selbstverständliche Frage neu zu formulieren.",
                    "source": "Albert Einstein · sinngemäß nach autobiographischen Notizen"
            },
            {
                    "quote": "Eine Melodie sollte atmen können, selbst wenn die Finger sehr beschäftigt sind.",
                    "source": "Wolfgang Amadeus Mozart · sinngemäß nach Briefen und musikalischer Praxis"
            },
            {
                    "quote": "Leichtigkeit ist nicht dasselbe wie Einfachheit; oft ist sie das Ergebnis sehr genauer Arbeit.",
                    "source": "Wolfgang Amadeus Mozart · sinngemäß nach Briefen an die Familie"
            },
            {
                    "quote": "Ein guter Einfall darf elegant sein und trotzdem frech.",
                    "source": "Wolfgang Amadeus Mozart · sinngemäß nach Briefen 1777–1791"
            },
            {
                    "quote": "Musik braucht Ordnung, aber sie lebt von dem Augenblick, in dem die Ordnung lächelt.",
                    "source": "Wolfgang Amadeus Mozart · sinngemäß nach Briefen und Werken"
            },
            {
                    "quote": "Technik ist nützlich, sobald sie aufhört, sich selbst vorzuführen.",
                    "source": "Wolfgang Amadeus Mozart · sinngemäß nach Briefen und musikalischer Praxis"
            },
            {
                    "quote": "Eine Pause kann genauso komponiert sein wie ein Ton.",
                    "source": "Wolfgang Amadeus Mozart · sinngemäß nach musikalischer Praxis"
            },
            {
                    "quote": "Humor und Präzision vertragen sich ausgezeichnet.",
                    "source": "Wolfgang Amadeus Mozart · sinngemäß nach Briefen an die Familie"
            },
            {
                    "quote": "Eine Stimme wird interessanter, wenn eine zweite ihr wirklich zuhört.",
                    "source": "Wolfgang Amadeus Mozart · sinngemäß nach kontrapunktischer Praxis"
            },
            {
                    "quote": "Man kann sehr ernst komponieren, ohne feierlich zu werden.",
                    "source": "Wolfgang Amadeus Mozart · sinngemäß nach Briefen und Werken"
            },
            {
                    "quote": "Ein Thema zeigt seinen Charakter erst, wenn man sieht, was es unter Druck tut.",
                    "source": "Wolfgang Amadeus Mozart · sinngemäß nach Sonaten- und Variationspraxis"
            },
            {
                    "quote": "Eleganz entsteht oft dort, wo nichts mehr hinzugefügt werden muss.",
                    "source": "Wolfgang Amadeus Mozart · sinngemäß nach musikalischer Praxis"
            },
            {
                    "quote": "Das Publikum darf überrascht werden, aber die Musik sollte wissen, warum.",
                    "source": "Wolfgang Amadeus Mozart · sinngemäß nach Briefen an Leopold Mozart"
            },
            {
                    "quote": "Ein schneller Satz braucht nicht weniger Gedanken, nur weniger Zeit, sie zu verstecken.",
                    "source": "Wolfgang Amadeus Mozart · sinngemäß nach musikalischer Praxis"
            },
            {
                    "quote": "Kontrapunkt ist die Kunst, gleichzeitig Recht zu haben und dem anderen Platz zu lassen.",
                    "source": "Wolfgang Amadeus Mozart · spielerisch sinngemäß nach seiner kontrapunktischen Musik"
            },
            {
                    "quote": "Ein guter Schluss wirkt unvermeidlich, obwohl er vorher nicht langweilig vorhersehbar war.",
                    "source": "Wolfgang Amadeus Mozart · sinngemäß nach musikalischer Praxis"
            },
            {
                    "quote": "Virtuosität ist am schönsten, wenn sie wie ein Nebeneffekt der Idee klingt.",
                    "source": "Wolfgang Amadeus Mozart · sinngemäß nach Briefen und Klavierwerken"
            },
            {
                    "quote": "Eine kleine harmonische Verschiebung kann eine ganze Szene psychologisch verändern.",
                    "source": "Wolfgang Amadeus Mozart · sinngemäß nach den Opern"
            },
            {
                    "quote": "Wer nur schöne Töne sucht, verpasst vielleicht die Figur, die gerade lügt.",
                    "source": "Wolfgang Amadeus Mozart · spielerisch sinngemäß nach den Opern"
            },
            {
                    "quote": "Musik darf gleichzeitig mathematisch klar und menschlich unvernünftig sein.",
                    "source": "Wolfgang Amadeus Mozart · sinngemäß nach seinen Werken"
            },
            {
                    "quote": "Wenn eine Phrase selbstverständlich klingt, steckt oft besonders viel Entscheidung darin.",
                    "source": "Wolfgang Amadeus Mozart · sinngemäß nach musikalischer Praxis"
            }
    ];


    const EXPANSION_MODELS = [
        // radiation-like
        p =>
            Math.sqrt(
                Math.max(
                    0,
                    p
                )
            ),

        // matter-like
        p =>
            Math.pow(
                Math.max(
                    0,
                    p
                ),
                2 / 3
            ),

        // coasting
        p =>
            p,

        // late acceleration / de Sitter-like
        p =>
            (
                Math.exp(
                    3.2 * p
                )
                -
                1
            )
            /
            (
                Math.exp(3.2)
                -
                1
            ),

        // slow early universe, then accelerated late expansion
        p => {
            const matter =
                Math.pow(
                    Math.max(
                        p,
                        0
                    ),
                    2 / 3
                );

            const late =
                (
                    Math.exp(
                        4 * p
                    )
                    -
                    1
                )
                /
                (
                    Math.exp(4)
                    -
                    1
                );

            const blend =
                p * p * (3 - 2 * p);

            return (
                matter * (1 - blend)
                +
                late * blend
            );
        },

        // radiation -> matter -> acceleration, smoothly normalized
        p => {
            const early =
                Math.sqrt(
                    Math.max(
                        0,
                        p
                    )
                );

            const middle =
                Math.pow(
                    Math.max(
                        0,
                        p
                    ),
                    2 / 3
                );

            const late =
                (
                    Math.exp(
                        3.5 * p
                    )
                    -
                    1
                )
                /
                (
                    Math.exp(3.5)
                    -
                    1
                );

            if (p < 0.28) {
                return (
                    early
                    /
                    Math.sqrt(0.28)
                    *
                    0.36
                );
            }

            if (p < 0.72) {
                const q =
                    (
                        p - 0.28
                    )
                    /
                    0.44;

                return (
                    0.36
                    +
                    0.40
                    *
                    (
                        q * q * (3 - 2 * q)
                    )
                );
            }

            const q =
                (
                    p - 0.72
                )
                /
                0.28;

            return (
                0.76
                +
                0.24
                *
                (
                    (
                        Math.exp(
                            2.6 * q
                        )
                        -
                        1
                    )
                    /
                    (
                        Math.exp(2.6)
                        -
                        1
                    )
                )
            );
        }
    ];


    function stopSessionInterval() {
        if (
            sessionInterval
            !==
            null
        ) {
            clearInterval(
                sessionInterval
            );

            sessionInterval =
                null;
        }
    }


    function currentSessionItem() {
        if (
            !sessionPlan
            ||
            sessionPlanFinishedPending
        ) {
            return null;
        }

        return (
            sessionPlan.items[
                sessionIndex
            ]
            ??
            null
        );
    }


    function renderMiniSession() {
        if (
            !sessionPlan
            ||
            activeScreen()
            ===
            screens.session
            ||
            activeScreen()
            ===
            screens.sessionReview
            ||
            activeScreen()
            ===
            screens.planComplete
        ) {
            el.miniSessionBar.classList.add(
                "hidden"
            );

            return;
        }

        el.miniSessionBar.classList.remove(
            "hidden"
        );

        if (
            sessionPlanFinishedPending
        ) {
            el.miniSessionBar.classList.add(
                "pending"
            );

            el.miniSessionName.textContent =
                "Plan abgeschlossen";

            el.miniSessionTime.textContent =
                "Öffnen";

            return;
        }

        const item =
            currentSessionItem();

        if (!item) {
            el.miniSessionBar.classList.add(
                "hidden"
            );

            return;
        }

        el.miniSessionBar.classList.toggle(
            "pending",
            sessionCompletionPending
        );

        el.miniSessionName.textContent =
            item.type
            ===
            "break"
                ? "Pause"
                : item.name;

        if (
            sessionCompletionPending
        ) {
            el.miniSessionTime.textContent =
                "Abgeschlossen";

            return;
        }

        if (
            sessionEndTime
            !==
            null
        ) {
            el.miniSessionTime.textContent =
                formatCountdown(
                    sessionEndTime
                    -
                    Date.now()
                );
        }
    }


    function wrapPeriodic(value) {
        let result =
            value;

        while (
            result > 0.5
        ) {
            result -= 1;
        }

        while (
            result < -0.5
        ) {
            result += 1;
        }

        return result;
    }


    function gaussian() {
        let u = 0;
        let v = 0;

        while (
            u === 0
        ) {
            u =
                Math.random();
        }

        while (
            v === 0
        ) {
            v =
                Math.random();
        }

        return (
            Math.sqrt(
                -2
                *
                Math.log(u)
            )
            *
            Math.cos(
                2
                *
                Math.PI
                *
                v
            )
        );
    }


    function periodicDelta(
        a,
        b
    ) {
        return wrapPeriodic(
            a - b
        );
    }


    function normalizePeriodic(
        value
    ) {
        let result =
            value;

        while (
            result >= 0.5
        ) {
            result -= 1;
        }

        while (
            result < -0.5
        ) {
            result += 1;
        }

        return result;
    }


    function addUniverseParticle(
        particle
    ) {
        universeParticles.push({
            // target homogeneous comoving position
            hx:
                particle.hx,
            hy:
                particle.hy,

            // initial chaotic displacement around the homogeneous target
            cx:
                particle.cx,
            cy:
                particle.cy,

            size:
                particle.size
                ??
                (
                    0.7
                    +
                    Math.random()
                    *
                    1.25
                ),

            alpha:
                particle.alpha
                ??
                (
                    0.45
                    +
                    Math.random()
                    *
                    0.45
                )
        });

        return (
            universeParticles.length
            -
            1
        );
    }


    function generateUniverse() {
        universeSeed =
            Math.floor(
                Math.random()
                *
                1_000_000_000
            );

        universeParticles =
            [];

        universeNodes =
            [];

        const particleCount =
            170
            +
            Math.floor(
                Math.random()
                *
                55
            );

        // Vogel/Fibonacci disk:
        // a very even target distribution in a circle without visible rings.
        const goldenAngle =
            Math.PI
            *
            (
                3
                -
                Math.sqrt(5)
            );

        for (
            let i = 0;
            i < particleCount;
            i += 1
        ) {
            const r =
                0.5
                *
                Math.sqrt(
                    (
                        i
                        +
                        0.5
                    )
                    /
                    particleCount
                );

            const angle =
                i
                *
                goldenAngle
                +
                Math.random()
                *
                0.018;

            const hx =
                r
                *
                Math.cos(
                    angle
                );

            const hy =
                r
                *
                Math.sin(
                    angle
                );

            addUniverseParticle({
                hx,
                hy,
                cx: 0,
                cy: 0,
                size:
                    0.65
                    +
                    Math.random()
                    *
                    1.25,
                alpha:
                    0.38
                    +
                    Math.random()
                    *
                    0.55
            });
        }

        // Random "overdensity" centres. These distort the initially homogeneous disk
        // into clumps/voids. During the timer those distortions are continuously removed.
        const nodeCount =
            8
            +
            Math.floor(
                Math.random()
                *
                6
            );

        for (
            let i = 0;
            i < nodeCount;
            i += 1
        ) {
            const radius =
                Math.sqrt(
                    Math.random()
                )
                *
                0.33;

            const angle =
                Math.random()
                *
                Math.PI
                *
                2;

            universeNodes.push({
                x:
                    radius
                    *
                    Math.cos(
                        angle
                    ),
                y:
                    radius
                    *
                    Math.sin(
                        angle
                    ),
                strength:
                    0.045
                    +
                    Math.random()
                    *
                    0.075,
                sign:
                    Math.random()
                    <
                    0.78
                        ? 1
                        : -1
            });
        }

        universeParticles.forEach(
            particle => {
                let displacementX =
                    0;

                let displacementY =
                    0;

                universeNodes.forEach(
                    node => {
                        const dx =
                            node.x
                            -
                            particle.hx;

                        const dy =
                            node.y
                            -
                            particle.hy;

                        const d2 =
                            dx * dx
                            +
                            dy * dy
                            +
                            0.008;

                        const factor =
                            node.sign
                            *
                            node.strength
                            /
                            d2;

                        displacementX +=
                            dx
                            *
                            factor
                            *
                            0.018;

                        displacementY +=
                            dy
                            *
                            factor
                            *
                            0.018;
                    }
                );

                // additional small-scale random perturbations
                displacementX +=
                    gaussian()
                    *
                    0.016;

                displacementY +=
                    gaussian()
                    *
                    0.016;

                // Keep all initial positions inside the circular domain.
                let x =
                    particle.hx
                    +
                    displacementX;

                let y =
                    particle.hy
                    +
                    displacementY;

                const radius =
                    Math.hypot(
                        x,
                        y
                    );

                if (
                    radius
                    >
                    0.5
                ) {
                    const scale =
                        0.5
                        /
                        radius;

                    x *=
                        scale;

                    y *=
                        scale;
                }

                particle.cx =
                    x
                    -
                    particle.hx;

                particle.cy =
                    y
                    -
                    particle.hy;
            }
        );

        universeObserverIndex =
            Math.floor(
                Math.random()
                *
                universeParticles.length
            );

        universeExpansionModel =
            Math.floor(
                Math.random()
                *
                EXPANSION_MODELS.length
            );

        universeObserverPulseUntil =
            performance.now()
            +
            900;
    }


    function universeComovingPosition(
        particle,
        ordering
    ) {
        // ordering = 0: chaotic / clustered
        // ordering = 1: homogeneous Fibonacci disk
        const chaos =
            1
            -
            ordering;

        return {
            x:
                particle.hx
                +
                particle.cx
                *
                chaos,
            y:
                particle.hy
                +
                particle.cy
                *
                chaos
        };
    }


    function sessionVisualProgress() {
        if (
            universeManualProgress
            !==
            null
        ) {
            return universeManualProgress;
        }

        if (
            sessionEndTime
            ===
            null
            ||
            sessionItemDurationMs
            <=
            0
        ) {
            return 1;
        }

        return Math.max(
            0,
            Math.min(
                1,
                1
                -
                (
                    sessionEndTime
                    -
                    Date.now()
                )
                /
                sessionItemDurationMs
            )
        );
    }


    function expansionScale(
        progress,
        width,
        height
    ) {
        const model =
            EXPANSION_MODELS[
                universeExpansionModel
            ];

        const forwardCosmicTime =
            1
            -
            Math.max(
                0,
                Math.min(
                    1,
                    progress
                )
            );

        const forwardScale =
            Math.max(
                0,
                Math.min(
                    1,
                    model(
                        forwardCosmicTime
                    )
                )
            );

        // Same expansion history, traversed backwards:
        // full circular universe at start -> nearly a point at 00:00.
        const minimumScale =
            0.006;

        const normalized =
            minimumScale
            +
            (
                1
                -
                minimumScale
            )
            *
            forwardScale;

        // Since comoving radius = 0.5, this initial diameter is larger than
        // the viewport diagonal, so the point distribution covers the whole screen.
        const fullDiameter =
            Math.hypot(
                width,
                height
            )
            *
            1.16;

        return (
            fullDiameter
            *
            normalized
        );
    }


    function universeColors() {
        const dark =
            state.settings.theme
            ===
            "dark";

        return dark
            ? {
                background:
                    "#111210",
                point:
                    "242,242,236",
                edge:
                    "188,194,199",
                observer:
                    "255,255,248"
            }
            : {
                background:
                    "#f6f6f2",
                point:
                    "18,18,17",
                edge:
                    "80,88,92",
                observer:
                    "0,0,0"
            };
    }


    function sizeUniverseCanvas() {
        const canvas =
            el.universeCanvas;

        const rect =
            canvas.getBoundingClientRect();

        const dpr =
            Math.min(
                2,
                window.devicePixelRatio
                ||
                1
            );

        const pixelWidth =
            Math.max(
                1,
                Math.round(
                    rect.width
                    *
                    dpr
                )
            );

        const pixelHeight =
            Math.max(
                1,
                Math.round(
                    rect.height
                    *
                    dpr
                )
            );

        if (
            canvas.width
            !==
            pixelWidth
            ||
            canvas.height
            !==
            pixelHeight
        ) {
            canvas.width =
                pixelWidth;

            canvas.height =
                pixelHeight;
        }

        return {
            width:
                rect.width,
            height:
                rect.height,
            dpr
        };
    }


    function drawUniverse(
        now
    ) {
        if (
            universeParticles.length
            ===
            0
        ) {
            return;
        }

        const canvas =
            el.universeCanvas;

        const context =
            canvas.getContext(
                "2d",
                {
                    alpha: false
                }
            );

        const {
            width,
            height,
            dpr
        } =
            sizeUniverseCanvas();

        context.setTransform(
            dpr,
            0,
            0,
            dpr,
            0,
            0
        );

        const colors =
            universeColors();

        context.fillStyle =
            colors.background;

        context.fillRect(
            0,
            0,
            width,
            height
        );

        const progress =
            sessionVisualProgress();

        const scale =
            expansionScale(
                progress,
                width,
                height
            );

        // Reverse-entropy visualisation:
        // density perturbations disappear smoothly as time progresses.
        const ordering =
            progress
            *
            progress
            *
            (
                3
                -
                2
                *
                progress
            );

        const observer =
            universeComovingPosition(
                universeParticles[
                    universeObserverIndex
                ],
                ordering
            );

        const centerX =
            width
            /
            2;

        const centerY =
            height
            /
            2;

        universeLastRendered =
            new Array(
                universeParticles.length
            );

        universeParticles.forEach(
            (
                particle,
                index
            ) => {
                const current =
                    universeComovingPosition(
                        particle,
                        ordering
                    );

                // Observer-centric translation in comoving coordinates.
                // Since the domain is circular rather than periodic, we simply
                // recenter the chosen observer and clip naturally at the viewport.
                const rx =
                    current.x
                    -
                    observer.x;

                const ry =
                    current.y
                    -
                    observer.y;

                const x =
                    centerX
                    +
                    rx
                    *
                    scale;

                const y =
                    centerY
                    +
                    ry
                    *
                    scale;

                universeLastRendered[
                    index
                ] = {
                    index,
                    x,
                    y,
                    visible:
                        x > -24
                        &&
                        x < width + 24
                        &&
                        y > -24
                        &&
                        y < height + 24
                };
            }
        );

        // Points only — no connecting lines.
        universeParticles.forEach(
            (
                particle,
                index
            ) => {
                const rendered =
                    universeLastRendered[
                        index
                    ];

                if (
                    !rendered
                    ||
                    !rendered.visible
                ) {
                    return;
                }

                const shrinkSoftening =
                    0.82
                    +
                    0.18
                    *
                    (
                        1
                        -
                        progress
                    );

                const radius =
                    Math.max(
                        0.52,
                        particle.size
                        *
                        shrinkSoftening
                    );

                const alpha =
                    particle.alpha
                    *
                    (
                        0.62
                        +
                        0.38
                        *
                        (
                            1
                            -
                            progress
                        )
                    );

                context.fillStyle =
                    `rgba(${colors.point},${alpha})`;

                context.beginPath();

                context.arc(
                    rendered.x,
                    rendered.y,
                    radius,
                    0,
                    Math.PI
                    *
                    2
                );

                context.fill();
            }
        );

        const selected =
            universeLastRendered[
                universeObserverIndex
            ];

        if (
            selected
            &&
            selected.visible
        ) {
            const pulseRemaining =
                Math.max(
                    0,
                    universeObserverPulseUntil
                    -
                    now
                );

            if (
                pulseRemaining
                >
                0
            ) {
                const phase =
                    1
                    -
                    pulseRemaining
                    /
                    900;

                const radius =
                    7
                    +
                    13
                    *
                    phase;

                const alpha =
                    0.32
                    *
                    (
                        1
                        -
                        phase
                    );

                context.strokeStyle =
                    `rgba(${colors.observer},${alpha})`;

                context.lineWidth =
                    0.8;

                context.beginPath();

                context.arc(
                    selected.x,
                    selected.y,
                    radius,
                    0,
                    Math.PI
                    *
                    2
                );

                context.stroke();
            }

            context.fillStyle =
                `rgba(${colors.observer},0.98)`;

            context.beginPath();

            context.arc(
                selected.x,
                selected.y,
                2.1,
                0,
                Math.PI
                *
                2
            );

            context.fill();
        }
    }


    function universeLoop(
        now
    ) {
        universeFrameHandle =
            null;

        if (
            !sessionPlan
            ||
            sessionPlanFinishedPending
            ||
            activeScreen()
            !==
            screens.session
        ) {
            return;
        }

        drawUniverse(
            now
        );

        if (
            universeManualProgress
            ===
            null
            &&
            sessionEndTime
            !==
            null
            &&
            Date.now()
            >=
            sessionEndTime
        ) {
            handleNaturalSessionEnd();
            return;
        }

        universeFrameHandle =
            requestAnimationFrame(
                universeLoop
            );
    }


    function ensureUniverseAnimation() {
        if (
            universeFrameHandle
            !==
            null
        ) {
            return;
        }

        if (
            !sessionPlan
            ||
            sessionPlanFinishedPending
            ||
            activeScreen()
            !==
            screens.session
        ) {
            return;
        }

        universeFrameHandle =
            requestAnimationFrame(
                universeLoop
            );
    }


    function startSession(plan) {
        sessionPlan =
            clone(plan);

        sessionIndex = 0;
        sessionCompletionPending = false;
        sessionPlanFinishedPending = false;
        sessionCompleting = false;
        completionQuote = null;

        showScreen(
            screens.session
        );

        startCurrentSessionItem();
    }


    function startCurrentSessionItem() {
        if (
            !sessionPlan
            ||
            sessionIndex
            >=
            sessionPlan.items.length
        ) {
            finishPlan(
                false
            );

            return;
        }

        const item =
            currentSessionItem();

        if (!item) {
            finishPlan(
                false
            );

            return;
        }

        sessionCompletionPending =
            false;

        universeManualProgress =
            null;

        el.sessionCard.classList.remove(
            "flipped"
        );

        el.sessionCard.classList.add(
            "can-flip"
        );

        if (
            item.type
            ===
            "task"
        ) {
            el.sessionTitle.textContent =
                item.name;

            el.sessionNote.textContent =
                item.note
                ||
                "";

            el.sessionNoteWrap.style.display =
                item.note
                    ? "flex"
                    : "none";

        } else {
            el.sessionTitle.textContent =
                "Pause";

            el.sessionNote.textContent =
                "";

            el.sessionNoteWrap.style.display =
                "none";
        }

        el.sessionProgress.textContent =
            `${sessionIndex + 1} von ${sessionPlan.items.length}`;

        generateUniverse();

        sessionItemDurationMs =
            Number(
                item.duration
            )
            *
            60
            *
            1000;

        sessionEndTime =
            Date.now()
            +
            sessionItemDurationMs;

        stopSessionInterval();

        updateSessionTimer();

        sessionInterval =
            setInterval(
                updateSessionTimer,
                250
            );

        ensureUniverseAnimation();

        renderMiniSession();
    }


    function updateSessionTimer() {
        if (
            sessionEndTime
            ===
            null
        ) {
            renderMiniSession();
            return;
        }

        const remaining =
            sessionEndTime
            -
            Date.now();

        el.sessionTimer.textContent =
            formatCountdown(
                remaining
            );

        renderMiniSession();

        if (
            remaining
            <=
            0
        ) {
            handleNaturalSessionEnd();
        }
    }


    function handleNaturalSessionEnd() {
        if (
            sessionCompleting
            ||
            sessionCompletionPending
            ||
            sessionPlanFinishedPending
        ) {
            return;
        }

        stopSessionInterval();

        universeManualProgress =
            1;

        if (
            activeScreen()
            ===
            screens.session
        ) {
            drawUniverse(
                performance.now()
            );
        }

        sessionEndTime =
            null;

        const item =
            currentSessionItem();

        if (!item) {
            finishPlan(
                activeScreen()
                !==
                screens.session
            );

            return;
        }

        if (
            item.type
            ===
            "task"
            &&
            item.note.trim()
            !==
            ""
        ) {
            if (
                activeScreen()
                ===
                screens.session
            ) {
                openSessionReview();

            } else {
                sessionCompletionPending =
                    true;

                renderMiniSession();
            }

            return;
        }

        advanceSession(
            activeScreen()
            !==
            screens.session
        );
    }


    function openSessionReview() {
        const item =
            currentSessionItem();

        if (
            !item
            ||
            item.type
            !==
            "task"
        ) {
            return;
        }

        sessionCompletionPending =
            false;

        el.reviewTitle.textContent =
            item.name;

        el.reviewNote.value =
            item.note;

        el.reviewDuration.value =
            item.duration;

        setError(
            el.reviewError
        );

        showScreen(
            screens.sessionReview
        );
    }


    function animateUniverseToEnd(
        callback
    ) {
        const startProgress =
            sessionVisualProgress();

        const originalRemaining =
            Math.max(
                0,
                sessionEndTime
                ===
                null
                    ? 0
                    : sessionEndTime
                      -
                      Date.now()
            );

        const startTime =
            performance.now();

        const duration =
            620;

        universeManualProgress =
            startProgress;

        const frame =
            now => {
                const raw =
                    (
                        now
                        -
                        startTime
                    )
                    /
                    duration;

                const t =
                    Math.max(
                        0,
                        Math.min(
                            1,
                            raw
                        )
                    );

                const eased =
                    1
                    -
                    Math.pow(
                        1 - t,
                        3
                    );

                universeManualProgress =
                    startProgress
                    +
                    (
                        1
                        -
                        startProgress
                    )
                    *
                    eased;

                el.sessionTimer.textContent =
                    formatCountdown(
                        originalRemaining
                        *
                        (
                            1 - eased
                        )
                    );

                drawUniverse(
                    now
                );

                if (
                    t < 1
                ) {
                    requestAnimationFrame(
                        frame
                    );

                } else {
                    universeManualProgress =
                        1;

                    el.sessionTimer.textContent =
                        "00:00";

                    callback();
                }
            };

        requestAnimationFrame(
            frame
        );
    }


    function endCurrentUnitEarly() {
        if (
            !sessionPlan
            ||
            sessionCompleting
            ||
            sessionPlanFinishedPending
        ) {
            return;
        }

        sessionCompleting =
            true;

        stopSessionInterval();

        animateUniverseToEnd(
            () => {
                sessionEndTime =
                    null;

                sessionCompleting =
                    false;

                const item =
                    currentSessionItem();

                if (!item) {
                    finishPlan(
                        false
                    );

                    return;
                }

                if (
                    item.type
                    ===
                    "task"
                    &&
                    item.note.trim()
                    !==
                    ""
                ) {
                    openSessionReview();
                    return;
                }

                advanceSession(
                    false
                );
            }
        );
    }


    function updateOriginalPlanItem(
        sessionItem
    ) {
        if (!sessionPlan) {
            return;
        }

        const storedPlan =
            state.plans.find(
                plan =>
                    plan.id
                    ===
                    sessionPlan.id
            );

        if (!storedPlan) {
            return;
        }

        const storedItem =
            storedPlan.items.find(
                item =>
                    item.id
                    ===
                    sessionItem.id
            );

        if (!storedItem) {
            return;
        }

        storedItem.note =
            sessionItem.note;

        storedItem.duration =
            sessionItem.duration;

        saveState();
    }


    el.saveReviewButton.addEventListener(
        "click",
        () => {
            const item =
                currentSessionItem();

            if (
                !item
                ||
                item.type
                !==
                "task"
            ) {
                return;
            }

            const duration =
                validPositiveNumber(
                    el.reviewDuration.value
                );

            if (!duration) {
                setError(
                    el.reviewError,
                    "Dauer fehlt."
                );

                return;
            }

            item.note =
                el.reviewNote
                    .value
                    .trim();

            item.duration =
                duration;

            updateOriginalPlanItem(
                item
            );

            advanceSession(
                false
            );
        }
    );


    function advanceSession(
        preserveCurrentScreen
    ) {
        sessionIndex += 1;
        sessionCompletionPending =
            false;
        universeManualProgress =
            null;

        if (
            !sessionPlan
            ||
            sessionIndex
            >=
            sessionPlan.items.length
        ) {
            finishPlan(
                preserveCurrentScreen
            );

            return;
        }

        if (
            !preserveCurrentScreen
        ) {
            showScreen(
                screens.session
            );
        }

        startCurrentSessionItem();
    }


    function chooseCompletionQuote() {
        completionQuote =
            COMPLETION_QUOTES[
                Math.floor(
                    Math.random()
                    *
                    COMPLETION_QUOTES.length
                )
            ];
    }


    function showPlanCompletion() {
        if (!completionQuote) {
            chooseCompletionQuote();
        }

        el.nietzscheQuote.textContent =
            `„${completionQuote.quote}“`;

        el.nietzscheSource.textContent =
            completionQuote.source;

        showScreen(
            screens.planComplete
        );
    }


    function finishPlan(
        preserveCurrentScreen = false
    ) {
        stopSessionInterval();

        sessionEndTime =
            null;

        sessionItemDurationMs =
            0;

        sessionCompletionPending =
            false;

        sessionCompleting =
            false;

        sessionPlanFinishedPending =
            true;

        universeManualProgress =
            1;

        chooseCompletionQuote();

        el.sessionCard.classList.remove(
            "flipped"
        );

        if (
            preserveCurrentScreen
        ) {
            renderMiniSession();

        } else {
            showPlanCompletion();
        }
    }


    function clearFinishedSession() {
        stopSessionInterval();

        sessionPlan =
            null;

        sessionIndex =
            0;

        sessionEndTime =
            null;

        sessionItemDurationMs =
            0;

        sessionCompletionPending =
            false;

        sessionCompleting =
            false;

        sessionPlanFinishedPending =
            false;

        completionQuote =
            null;

        universeParticles =
            [];

        universeNodes =
            [];

        universeLastRendered =
            [];

        universeManualProgress =
            null;

        if (
            universeFrameHandle
            !==
            null
        ) {
            cancelAnimationFrame(
                universeFrameHandle
            );

            universeFrameHandle =
                null;
        }

        renderMiniSession();
    }


    el.completePlanButton.addEventListener(
        "click",
        () => {
            clearFinishedSession();

            showScreen(
                screens.plannerHub
            );
        }
    );


    el.universeCanvas.addEventListener(
        "click",
        event => {
            event.stopPropagation();

            if (
                !sessionPlan
                ||
                sessionPlanFinishedPending
                ||
                universeLastRendered.length
                ===
                0
            ) {
                return;
            }

            const rect =
                el.universeCanvas.getBoundingClientRect();

            const x =
                event.clientX
                -
                rect.left;

            const y =
                event.clientY
                -
                rect.top;

            let best =
                null;

            let bestDistance =
                Infinity;

            universeLastRendered.forEach(
                rendered => {
                    if (
                        !rendered
                        ||
                        !rendered.visible
                    ) {
                        return;
                    }

                    const distance =
                        Math.hypot(
                            rendered.x - x,
                            rendered.y - y
                        );

                    if (
                        distance
                        <
                        bestDistance
                    ) {
                        bestDistance =
                            distance;

                        best =
                            rendered;
                    }
                }
            );

            if (
                best
                &&
                bestDistance
                <=
                24
            ) {
                universeObserverIndex =
                    best.index;

                universeObserverPulseUntil =
                    performance.now()
                    +
                    900;

                drawUniverse(
                    performance.now()
                );

                return;
            }

            el.sessionCard.classList.add(
                "flipped"
            );
        }
    );


    el.sessionCard.addEventListener(
        "click",
        event => {
            if (
                event.target
                ===
                el.universeCanvas
                ||
                event.target.closest(
                    "button"
                )
            ) {
                return;
            }

            if (
                !sessionPlan
                ||
                sessionPlanFinishedPending
            ) {
                return;
            }

            if (
                el.sessionCard.classList.contains(
                    "flipped"
                )
            ) {
                el.sessionCard.classList.remove(
                    "flipped"
                );
            }
        }
    );


    el.sessionMenuButton.addEventListener(
        "click",
        () => {
            showScreen(
                screens.home
            );
        }
    );


    el.sessionEndButton.addEventListener(
        "click",
        endCurrentUnitEarly
    );


    el.miniSessionButton.addEventListener(
        "click",
        () => {
            if (
                sessionPlanFinishedPending
            ) {
                showPlanCompletion();
                return;
            }

            if (
                sessionCompletionPending
            ) {
                openSessionReview();
                return;
            }

            showScreen(
                screens.session
            );

            updateSessionTimer();

            ensureUniverseAnimation();
        }
    );


    window.addEventListener(
        "resize",
        () => {
            if (
                sessionPlan
                &&
                activeScreen()
                ===
                screens.session
            ) {
                drawUniverse(
                    performance.now()
                );
            }
        }
    );


    // ==================================================
    // TEXTE HUB
    // ==================================================

    el.openThoughtsButton.addEventListener(
        "click",
        () => {
            currentThoughtFolderId =
                null;

            renderThoughtList();

            showScreen(
                screens.thoughtList
            );
        }
    );

    el.openDaysButton.addEventListener(
        "click",
        () => {
            renderDayList();

            showScreen(
                screens.dayList
            );
        }
    );

    el.openDreamsButton.addEventListener(
        "click",
        () => {
            renderDreamList();

            showScreen(
                screens.dreamList
            );
        }
    );

    el.openFilmsButton.addEventListener(
        "click",
        () => {
            openReviewLibrary(
                "films"
            );
        }
    );

    el.openBooksButton.addEventListener(
        "click",
        () => {
            openReviewLibrary(
                "books"
            );
        }
    );


    // ==================================================
    // GEDANKEN — ORDNER + RICH TEXT
    // ==================================================

    function thoughtEntries() {
        return state.thoughts;
    }


    function getThoughtEntry(id) {
        return (
            thoughtEntries().find(
                item =>
                    item.id
                    ===
                    id
            )
            ??
            null
        );
    }


    function thoughtChildren(
        parentId
    ) {
        return thoughtEntries()
            .filter(
                item =>
                    item.parentId
                    ===
                    parentId
            );
    }


    function thoughtPath(
        folderId
    ) {
        const path = [];
        let currentId =
            folderId;

        const seen =
            new Set();

        while (currentId) {
            if (
                seen.has(
                    currentId
                )
            ) {
                break;
            }

            seen.add(
                currentId
            );

            const folder =
                getThoughtEntry(
                    currentId
                );

            if (
                !folder
                ||
                folder.type
                !==
                "folder"
            ) {
                break;
            }

            path.unshift(
                folder
            );

            currentId =
                folder.parentId;
        }

        return path;
    }


    function thoughtFolderDisplayPath(
        folder
    ) {
        return thoughtPath(
            folder.id
        )
        .map(
            item =>
                item.title
        )
        .join(
            " › "
        );
    }


    function renderThoughtBreadcrumbs() {
        el.thoughtBreadcrumbs.innerHTML =
            "";

        const root =
            document.createElement(
                "button"
            );

        root.type =
            "button";

        root.className =
            "breadcrumb-button";

        root.textContent =
            "Gedanken";

        root.addEventListener(
            "click",
            () => {
                currentThoughtFolderId =
                    null;

                renderThoughtList();
            }
        );

        el.thoughtBreadcrumbs.appendChild(
            root
        );

        thoughtPath(
            currentThoughtFolderId
        ).forEach(
            folder => {
                const separator =
                    document.createElement(
                        "span"
                    );

                separator.className =
                    "breadcrumb-separator";

                separator.textContent =
                    "›";

                const button =
                    document.createElement(
                        "button"
                    );

                button.type =
                    "button";

                button.className =
                    "breadcrumb-button";

                button.textContent =
                    folder.title;

                button.addEventListener(
                    "click",
                    () => {
                        currentThoughtFolderId =
                            folder.id;

                        renderThoughtList();
                    }
                );

                el.thoughtBreadcrumbs.append(
                    separator,
                    button
                );
            }
        );
    }


    function stripRichText(html) {
        const element =
            document.createElement(
                "div"
            );

        element.innerHTML =
            sanitizeRichHtml(
                html
            );

        return (
            element.textContent
            ??
            ""
        ).trim();
    }


    function normalizeThoughtSiblingOrder(
        parentId
    ) {
        const siblings =
            thoughtChildren(
                parentId
            ).sort(
                (
                    a,
                    b
                ) =>
                    Number(
                        a.order
                        ??
                        0
                    )
                    -
                    Number(
                        b.order
                        ??
                        0
                    )
            );

        siblings.forEach(
            (
                item,
                index
            ) => {
                item.order =
                    index;
            }
        );
    }


    function nextThoughtOrder(
        parentId
    ) {
        const siblings =
            thoughtChildren(
                parentId
            );

        if (
            siblings.length
            ===
            0
        ) {
            return 0;
        }

        return (
            Math.max(
                ...siblings.map(
                    item =>
                        Number(
                            item.order
                            ??
                            0
                        )
                )
            )
            +
            1
        );
    }


    function moveThoughtEntry(
        id,
        direction
    ) {
        const item =
            getThoughtEntry(
                id
            );

        if (!item) {
            return;
        }

        normalizeThoughtSiblingOrder(
            item.parentId
        );

        const siblings =
            thoughtChildren(
                item.parentId
            ).sort(
                (
                    a,
                    b
                ) =>
                    a.order
                    -
                    b.order
            );

        const index =
            siblings.findIndex(
                entry =>
                    entry.id
                    ===
                    id
            );

        const targetIndex =
            index
            +
            direction;

        if (
            targetIndex < 0
            ||
            targetIndex
            >=
            siblings.length
        ) {
            return;
        }

        const target =
            siblings[
                targetIndex
            ];

        const oldOrder =
            item.order;

        item.order =
            target.order;

        target.order =
            oldOrder;

        saveState();
        renderThoughtList();
    }


    function renderThoughtList() {
        renderThoughtBreadcrumbs();

        el.thoughtList.innerHTML =
            "";

        const items =
            thoughtChildren(
                currentThoughtFolderId
            )
            .sort(
                (
                    a,
                    b
                ) =>
                    Number(
                        a.order
                        ??
                        0
                    )
                    -
                    Number(
                        b.order
                        ??
                        0
                    )
            );

        el.thoughtEmpty.style.display =
            items.length === 0
                ? "block"
                : "none";

        items.forEach(
            (
                item,
                index
            ) => {
                const row =
                    document.createElement(
                        "div"
                    );

                row.className =
                    "text-row";

                if (
                    item.type
                    ===
                    "folder"
                ) {
                    row.classList.add(
                        "folder-row"
                    );
                }

                const main =
                    document.createElement(
                        "button"
                    );

                main.type =
                    "button";

                main.className =
                    "row-main-button";

                const title =
                    document.createElement(
                        "div"
                    );

                title.className =
                    "row-title";

                title.textContent =
                    item.title.trim()
                    ||
                    (
                        item.type
                        ===
                        "folder"
                            ? "Ordner"
                            : "Ohne Titel"
                    );

                const subtitle =
                    document.createElement(
                        "div"
                    );

                subtitle.className =
                    "row-subtitle";

                if (
                    item.type
                    ===
                    "folder"
                ) {
                    subtitle.textContent =
                        `${thoughtChildren(item.id).length} Einträge`;

                } else {
                    const preview =
                        stripRichText(
                            item.bodyHtml
                        );

                    subtitle.textContent =
                        preview
                            ? `${formatDate(item.updatedAt)} · ${preview}`
                            : formatDate(
                                item.updatedAt
                            );
                }

                main.append(
                    title,
                    subtitle
                );

                main.addEventListener(
                    "click",
                    () => {
                        if (
                            item.type
                            ===
                            "folder"
                        ) {
                            currentThoughtFolderId =
                                item.id;

                            renderThoughtList();

                        } else {
                            openThoughtEditor(
                                item.id
                            );
                        }
                    }
                );

                row.appendChild(
                    main
                );

                const controls =
                    document.createElement(
                        "div"
                    );

                controls.className =
                    "library-move-controls";

                const up =
                    document.createElement(
                        "button"
                    );

                up.type =
                    "button";

                up.textContent =
                    "↑";

                up.disabled =
                    index === 0;

                up.addEventListener(
                    "click",
                    () => {
                        moveThoughtEntry(
                            item.id,
                            -1
                        );
                    }
                );

                const down =
                    document.createElement(
                        "button"
                    );

                down.type =
                    "button";

                down.textContent =
                    "↓";

                down.disabled =
                    index
                    ===
                    items.length
                    -
                    1;

                down.addEventListener(
                    "click",
                    () => {
                        moveThoughtEntry(
                            item.id,
                            1
                        );
                    }
                );

                controls.append(
                    up,
                    down
                );

                row.appendChild(
                    controls
                );

                if (
                    item.type
                    ===
                    "folder"
                ) {
                    const more =
                        document.createElement(
                            "button"
                        );

                    more.type =
                        "button";

                    more.className =
                        "library-more-button";

                    more.textContent =
                        "···";

                    more.addEventListener(
                        "click",
                        () => {
                            openThoughtFolderEditor(
                                item.id
                            );
                        }
                    );

                    row.appendChild(
                        more
                    );
                }

                el.thoughtList.appendChild(
                    row
                );
            }
        );
    }


    el.backFromThoughtList.addEventListener(
        "click",
        () => {
            if (
                currentThoughtFolderId
            ) {
                const folder =
                    getThoughtEntry(
                        currentThoughtFolderId
                    );

                currentThoughtFolderId =
                    folder?.parentId
                    ??
                    null;

                renderThoughtList();
                return;
            }

            showScreen(
                screens.textsHub
            );
        }
    );


    el.addThoughtButton.addEventListener(
        "click",
        () => {
            const item = {
                id: createId(),
                type: "thought",
                parentId:
                    currentThoughtFolderId,
                title: "",
                bodyHtml: "",
                order:
                    nextThoughtOrder(
                        currentThoughtFolderId
                    ),
                createdAt:
                    nowIso(),
                updatedAt:
                    nowIso()
            };

            state.thoughts.push(
                item
            );

            saveState();

            openThoughtEditor(
                item.id
            );
        }
    );


    // --------------------------------------------------
    // GEDANKEN-ORDNER
    // --------------------------------------------------

    el.addThoughtFolderButton.addEventListener(
        "click",
        () => {
            currentThoughtFolderEditId =
                null;

            el.thoughtFolderName.value =
                "";

            setError(
                el.thoughtFolderError
            );

            el.deleteThoughtFolderButton.style.display =
                "none";

            showScreen(
                screens.thoughtFolderEditor
            );

            setTimeout(
                () => {
                    el.thoughtFolderName.focus();
                },
                0
            );
        }
    );


    function openThoughtFolderEditor(
        id
    ) {
        const folder =
            getThoughtEntry(
                id
            );

        if (
            !folder
            ||
            folder.type
            !==
            "folder"
        ) {
            return;
        }

        currentThoughtFolderEditId =
            id;

        el.thoughtFolderName.value =
            folder.title;

        setError(
            el.thoughtFolderError
        );

        el.deleteThoughtFolderButton.style.display =
            "block";

        showScreen(
            screens.thoughtFolderEditor
        );
    }


    el.backFromThoughtFolderEditor.addEventListener(
        "click",
        () => {
            currentThoughtFolderEditId =
                null;

            renderThoughtList();

            showScreen(
                screens.thoughtList
            );
        }
    );


    el.saveThoughtFolderButton.addEventListener(
        "click",
        () => {
            const name =
                el.thoughtFolderName
                    .value
                    .trim();

            if (!name) {
                setError(
                    el.thoughtFolderError,
                    "Name fehlt."
                );

                return;
            }

            if (
                currentThoughtFolderEditId
            ) {
                const folder =
                    getThoughtEntry(
                        currentThoughtFolderEditId
                    );

                if (!folder) {
                    return;
                }

                folder.title =
                    name;

                folder.updatedAt =
                    nowIso();

            } else {
                state.thoughts.push({
                    id: createId(),
                    type: "folder",
                    parentId:
                        currentThoughtFolderId,
                    title: name,
                    bodyHtml: "",
                    order:
                        nextThoughtOrder(
                            currentThoughtFolderId
                        ),
                    createdAt:
                        nowIso(),
                    updatedAt:
                        nowIso()
                });
            }

            saveState();

            currentThoughtFolderEditId =
                null;

            renderThoughtList();

            showScreen(
                screens.thoughtList
            );
        }
    );


    function collectThoughtDescendantIds(
        folderId
    ) {
        const found =
            new Set();

        const processed =
            new Set();

        const queue =
            [folderId];

        while (
            queue.length
        ) {
            const current =
                queue.shift();

            if (
                processed.has(
                    current
                )
            ) {
                continue;
            }

            processed.add(
                current
            );

            found.add(
                current
            );

            thoughtEntries()
                .filter(
                    item =>
                        item.parentId
                        ===
                        current
                )
                .forEach(
                    item => {
                        found.add(
                            item.id
                        );

                        if (
                            item.type
                            ===
                            "folder"
                        ) {
                            queue.push(
                                item.id
                            );
                        }
                    }
                );
        }

        return found;
    }


    el.deleteThoughtFolderButton.addEventListener(
        "click",
        () => {
            if (
                !currentThoughtFolderEditId
            ) {
                return;
            }

            if (
                !window.confirm(
                    "Ordner und alle enthaltenen Gedanken löschen?"
                )
            ) {
                return;
            }

            const ids =
                collectThoughtDescendantIds(
                    currentThoughtFolderEditId
                );

            state.thoughts =
                state.thoughts.filter(
                    item =>
                        !ids.has(
                            item.id
                        )
                );

            saveState();

            if (
                ids.has(
                    currentThoughtFolderId
                )
            ) {
                currentThoughtFolderId =
                    null;
            }

            currentThoughtFolderEditId =
                null;

            renderThoughtList();

            showScreen(
                screens.thoughtList
            );
        }
    );


    // --------------------------------------------------
    // GEDANKEN-EDITOR
    // --------------------------------------------------

    function thoughtFolders() {
        return thoughtEntries()
            .filter(
                item =>
                    item.type
                    ===
                    "folder"
            );
    }


    function renderThoughtFolderOptions(
        selectedId
    ) {
        el.thoughtFolderSelect.innerHTML =
            "";

        const root =
            document.createElement(
                "option"
            );

        root.value =
            "";

        root.textContent =
            "Ohne Ordner";

        el.thoughtFolderSelect.appendChild(
            root
        );

        thoughtFolders()
            .sort(
                (
                    a,
                    b
                ) =>
                    thoughtFolderDisplayPath(a)
                        .localeCompare(
                            thoughtFolderDisplayPath(b),
                            "de"
                        )
            )
            .forEach(
                folder => {
                    const option =
                        document.createElement(
                            "option"
                        );

                    option.value =
                        folder.id;

                    option.textContent =
                        thoughtFolderDisplayPath(
                            folder
                        );

                    el.thoughtFolderSelect.appendChild(
                        option
                    );
                }
            );

        el.thoughtFolderSelect.value =
            selectedId
            ??
            "";
    }


    function openThoughtEditor(
        id
    ) {
        const item =
            getThoughtEntry(
                id
            );

        if (
            !item
            ||
            item.type
            !==
            "thought"
        ) {
            return;
        }

        currentThoughtId =
            id;

        el.thoughtTitle.value =
            item.title;

        el.thoughtBody.innerHTML =
            sanitizeRichHtml(
                item.bodyHtml
            );

        renderThoughtFolderOptions(
            item.parentId
        );

        el.thoughtSaveState.textContent =
            "Gespeichert";

        el.thoughtToolsMenu.classList.add(
            "hidden"
        );

        showScreen(
            screens.thoughtEditor
        );

        if (!item.title) {
            setTimeout(
                () => {
                    el.thoughtTitle.focus();
                },
                0
            );
        }
    }


    function currentThought() {
        const item =
            getThoughtEntry(
                currentThoughtId
            );

        return (
            item
            &&
            item.type
            ===
            "thought"
                ? item
                : null
        );
    }


    function saveCurrentThought() {
        const item =
            currentThought();

        if (!item) {
            return;
        }

        const oldParentId =
            item.parentId;

        const newParentId =
            el.thoughtFolderSelect.value
            ||
            null;

        item.title =
            el.thoughtTitle.value;

        item.bodyHtml =
            sanitizeRichHtml(
                el.thoughtBody.innerHTML
            );

        if (
            oldParentId
            !==
            newParentId
        ) {
            item.parentId =
                newParentId;

            item.order =
                nextThoughtOrder(
                    newParentId
                );
        }

        item.updatedAt =
            nowIso();

        const ok =
            saveState();

        el.thoughtSaveState.textContent =
            ok
                ? "Gespeichert"
                : "Nicht gespeichert";
    }


    function scheduleThoughtSave() {
        el.thoughtSaveState.textContent =
            "Speichert …";

        if (
            thoughtSaveTimer
        ) {
            clearTimeout(
                thoughtSaveTimer
            );
        }

        thoughtSaveTimer =
            setTimeout(
                saveCurrentThought,
                280
            );
    }


    function selectionInsideThoughtEditor() {
        const selection =
            window.getSelection();

        if (
            !selection
            ||
            selection.rangeCount
            ===
            0
        ) {
            return false;
        }

        const range =
            selection.getRangeAt(
                0
            );

        return (
            el.thoughtBody.contains(
                range.commonAncestorContainer
            )
            ||
            range.commonAncestorContainer
            ===
            el.thoughtBody
        );
    }


    function saveThoughtSelection() {
        if (
            selectionInsideThoughtEditor()
        ) {
            const selection =
                window.getSelection();

            savedThoughtRange =
                selection
                    .getRangeAt(0)
                    .cloneRange();
        }
    }


    function restoreThoughtSelection() {
        if (!savedThoughtRange) {
            el.thoughtBody.focus();
            return;
        }

        const selection =
            window.getSelection();

        selection.removeAllRanges();

        selection.addRange(
            savedThoughtRange
        );

        el.thoughtBody.focus();
    }


    function applyThoughtFormat(
        command,
        value = null
    ) {
        restoreThoughtSelection();

        document.execCommand(
            command,
            false,
            value
        );

        saveThoughtSelection();
        scheduleThoughtSave();
    }


    document.addEventListener(
        "selectionchange",
        saveThoughtSelection
    );


    el.thoughtTitle.addEventListener(
        "input",
        scheduleThoughtSave
    );

    el.thoughtBody.addEventListener(
        "input",
        scheduleThoughtSave
    );

    el.thoughtFolderSelect.addEventListener(
        "change",
        scheduleThoughtSave
    );


    el.thoughtToolsButton.addEventListener(
        "click",
        event => {
            event.stopPropagation();

            el.thoughtToolsMenu.classList.toggle(
                "hidden"
            );
        }
    );


    document.querySelectorAll(
        ".format-button"
    ).forEach(
        button => {
            button.addEventListener(
                "click",
                () => {
                    applyThoughtFormat(
                        button.dataset.command,
                        button.dataset.value
                        ??
                        null
                    );
                }
            );
        }
    );


    el.thoughtColor.addEventListener(
        "input",
        () => {
            applyThoughtFormat(
                "foreColor",
                el.thoughtColor.value
            );
        }
    );


    document.addEventListener(
        "click",
        event => {
            if (
                !el.thoughtToolsMenu.contains(
                    event.target
                )
                &&
                event.target
                !==
                el.thoughtToolsButton
            ) {
                el.thoughtToolsMenu.classList.add(
                    "hidden"
                );
            }
        }
    );


    el.backFromThoughtEditor.addEventListener(
        "click",
        () => {
            saveCurrentThought();

            const item =
                currentThought();

            currentThoughtFolderId =
                item?.parentId
                ??
                currentThoughtFolderId;

            currentThoughtId =
                null;

            renderThoughtList();

            showScreen(
                screens.thoughtList
            );
        }
    );


    el.deleteThoughtButton.addEventListener(
        "click",
        () => {
            const item =
                currentThought();

            if (!item) {
                return;
            }

            if (
                !window.confirm(
                    "Gedanken löschen?"
                )
            ) {
                return;
            }

            const parentId =
                item.parentId;

            state.thoughts =
                state.thoughts.filter(
                    thought =>
                        thought.id
                        !==
                        item.id
                );

            saveState();

            currentThoughtId =
                null;

            currentThoughtFolderId =
                parentId;

            renderThoughtList();

            showScreen(
                screens.thoughtList
            );
        }
    );


    el.thoughtPdfButton.addEventListener(
        "click",
        () => {
            saveCurrentThought();

            const item =
                currentThought();

            if (!item) {
                return;
            }

            exportPrintableRichDocument(
                item.title.trim()
                ||
                "Gedanke",
                item.bodyHtml
            );
        }
    );


    // ==================================================
    // TAGE
    // ==================================================

    function renderDayList() {
        el.dayList.innerHTML =
            "";

        const items =
            [...state.days]
                .sort(
                    (
                        a,
                        b
                    ) =>
                        b.date.localeCompare(
                            a.date
                        )
                        ||
                        new Date(
                            b.updatedAt
                        )
                        -
                        new Date(
                            a.updatedAt
                        )
                );

        el.dayEmpty.style.display =
            items.length === 0
                ? "block"
                : "none";

        items.forEach(item => {
            const row =
                document.createElement(
                    "div"
                );

            row.className =
                "text-row";

            const button =
                document.createElement(
                    "button"
                );

            button.type =
                "button";

            button.className =
                "row-main-button";

            const title =
                document.createElement(
                    "div"
                );

            title.className =
                "row-title";

            title.textContent =
                item.title.trim()
                ||
                formatDate(
                    item.date
                );

            const subtitle =
                document.createElement(
                    "div"
                );

            subtitle.className =
                "row-subtitle";

            const mood =
                item.mood
                    ? ` · Stimmung ${item.mood}/5`
                    : "";

            subtitle.textContent =
                `${formatDate(item.date)}${mood}`;

            button.append(
                title,
                subtitle
            );

            button.addEventListener(
                "click",
                () => {
                    openDayEditor(
                        item.id
                    );
                }
            );

            row.appendChild(
                button
            );

            el.dayList.appendChild(
                row
            );
        });
    }


    el.backFromDayList.addEventListener(
        "click",
        () => {
            showScreen(
                screens.textsHub
            );
        }
    );


    el.addDayButton.addEventListener(
        "click",
        () => {
            const item = {
                id: createId(),
                date:
                    localDateValue(),
                title: "",
                mood: null,
                body: "",
                reflection: "",
                createdAt: nowIso(),
                updatedAt: nowIso()
            };

            state.days.push(
                item
            );

            saveState();

            openDayEditor(
                item.id
            );
        }
    );


    function openDayEditor(id) {
        const item =
            state.days.find(
                day =>
                    day.id
                    ===
                    id
            );

        if (!item) {
            return;
        }

        currentDayId =
            id;

        el.dayDate.value =
            item.date;

        el.dayTitle.value =
            item.title;

        el.dayMood.value =
            item.mood
                ? String(
                    item.mood
                )
                : "";

        el.dayBody.value =
            item.body;

        el.dayReflection.value =
            item.reflection;

        el.daySaveState.textContent =
            "Gespeichert";

        showScreen(
            screens.dayEditor
        );
    }


    function currentDay() {
        return (
            state.days.find(
                item =>
                    item.id
                    ===
                    currentDayId
            )
            ??
            null
        );
    }


    function saveCurrentDay() {
        const item =
            currentDay();

        if (!item) {
            return;
        }

        item.date =
            el.dayDate.value
            ||
            localDateValue();

        item.title =
            el.dayTitle.value;

        item.mood =
            el.dayMood.value
                ? Number(
                    el.dayMood.value
                )
                : null;

        item.body =
            el.dayBody.value;

        item.reflection =
            el.dayReflection.value;

        item.updatedAt =
            nowIso();

        const ok =
            saveState();

        el.daySaveState.textContent =
            ok
                ? "Gespeichert"
                : "Nicht gespeichert";
    }


    function scheduleDaySave() {
        el.daySaveState.textContent =
            "Speichert …";

        if (daySaveTimer) {
            clearTimeout(
                daySaveTimer
            );
        }

        daySaveTimer =
            setTimeout(
                saveCurrentDay,
                300
            );
    }


    [
        el.dayDate,
        el.dayTitle,
        el.dayMood,
        el.dayBody,
        el.dayReflection
    ].forEach(
        input => {
            input.addEventListener(
                "input",
                scheduleDaySave
            );

            input.addEventListener(
                "change",
                scheduleDaySave
            );
        }
    );


    el.backFromDayEditor.addEventListener(
        "click",
        () => {
            saveCurrentDay();

            currentDayId =
                null;

            renderDayList();

            showScreen(
                screens.dayList
            );
        }
    );


    el.deleteDayButton.addEventListener(
        "click",
        () => {
            const item =
                currentDay();

            if (!item) {
                return;
            }

            if (
                !window.confirm(
                    "Tagebucheintrag löschen?"
                )
            ) {
                return;
            }

            state.days =
                state.days.filter(
                    day =>
                        day.id
                        !==
                        item.id
                );

            saveState();

            currentDayId =
                null;

            renderDayList();

            showScreen(
                screens.dayList
            );
        }
    );


    el.dayPdfButton.addEventListener(
        "click",
        () => {
            saveCurrentDay();

            const item =
                currentDay();

            if (!item) {
                return;
            }

            exportPrintableDocument(
                item.title.trim()
                ||
                formatDate(
                    item.date
                ),
                [
                    {
                        heading: "Datum",
                        text:
                            formatDate(
                                item.date
                            )
                    },
                    {
                        heading: "Stimmung",
                        text:
                            item.mood
                                ? `${item.mood}/5`
                                : ""
                    },
                    {
                        heading: "Der Tag",
                        text:
                            item.body
                    },
                    {
                        heading: "Was bleibt",
                        text:
                            item.reflection
                    }
                ]
            );
        }
    );


    // ==================================================
    // TRÄUME
    // ==================================================

    function renderDreamList() {
        el.dreamList.innerHTML =
            "";

        const items =
            [...state.dreams]
                .sort(
                    (
                        a,
                        b
                    ) =>
                        b.date.localeCompare(
                            a.date
                        )
                        ||
                        new Date(
                            b.updatedAt
                        )
                        -
                        new Date(
                            a.updatedAt
                        )
                );

        el.dreamEmpty.style.display =
            items.length === 0
                ? "block"
                : "none";

        items.forEach(item => {
            const row =
                document.createElement(
                    "div"
                );

            row.className =
                "text-row";

            const button =
                document.createElement(
                    "button"
                );

            button.type =
                "button";

            button.className =
                "row-main-button";

            const title =
                document.createElement(
                    "div"
                );

            title.className =
                "row-title";

            title.textContent =
                item.title.trim()
                ||
                "Traum";

            const subtitle =
                document.createElement(
                    "div"
                );

            subtitle.className =
                "row-subtitle";

            subtitle.textContent =
                item.interpretation.trim()
                    ? `${formatDate(item.date)} · gedeutet`
                    : formatDate(
                        item.date
                    );

            button.append(
                title,
                subtitle
            );

            button.addEventListener(
                "click",
                () => {
                    openDreamEditor(
                        item.id
                    );
                }
            );

            row.appendChild(
                button
            );

            el.dreamList.appendChild(
                row
            );
        });
    }


    el.backFromDreamList.addEventListener(
        "click",
        () => {
            showScreen(
                screens.textsHub
            );
        }
    );


    el.addDreamButton.addEventListener(
        "click",
        () => {
            const item = {
                id: createId(),
                date:
                    localDateValue(),
                title: "",
                manifest: "",
                affect: "",
                dayResidue: "",
                associations: "",
                condensation: "",
                displacement: "",
                wishConflict: "",
                interpretation: "",
                createdAt: nowIso(),
                updatedAt: nowIso()
            };

            state.dreams.push(
                item
            );

            saveState();

            openDreamEditor(
                item.id
            );
        }
    );


    function openDreamEditor(id) {
        const item =
            state.dreams.find(
                dream =>
                    dream.id
                    ===
                    id
            );

        if (!item) {
            return;
        }

        currentDreamId =
            id;

        el.dreamDate.value =
            item.date;

        el.dreamTitle.value =
            item.title;

        el.dreamManifest.value =
            item.manifest;

        el.dreamAffect.value =
            item.affect;

        el.dreamDayResidue.value =
            item.dayResidue;

        el.dreamAssociations.value =
            item.associations;

        el.dreamCondensation.value =
            item.condensation;

        el.dreamDisplacement.value =
            item.displacement;

        el.dreamWishConflict.value =
            item.wishConflict;

        el.dreamInterpretation.value =
            item.interpretation;

        el.dreamSaveState.textContent =
            "Gespeichert";

        showScreen(
            screens.dreamEditor
        );
    }


    function currentDream() {
        return (
            state.dreams.find(
                item =>
                    item.id
                    ===
                    currentDreamId
            )
            ??
            null
        );
    }


    function saveCurrentDream() {
        const item =
            currentDream();

        if (!item) {
            return;
        }

        item.date =
            el.dreamDate.value
            ||
            localDateValue();

        item.title =
            el.dreamTitle.value;

        item.manifest =
            el.dreamManifest.value;

        item.affect =
            el.dreamAffect.value;

        item.dayResidue =
            el.dreamDayResidue.value;

        item.associations =
            el.dreamAssociations.value;

        item.condensation =
            el.dreamCondensation.value;

        item.displacement =
            el.dreamDisplacement.value;

        item.wishConflict =
            el.dreamWishConflict.value;

        item.interpretation =
            el.dreamInterpretation.value;

        item.updatedAt =
            nowIso();

        const ok =
            saveState();

        el.dreamSaveState.textContent =
            ok
                ? "Gespeichert"
                : "Nicht gespeichert";
    }


    function scheduleDreamSave() {
        el.dreamSaveState.textContent =
            "Speichert …";

        if (
            dreamSaveTimer
        ) {
            clearTimeout(
                dreamSaveTimer
            );
        }

        dreamSaveTimer =
            setTimeout(
                saveCurrentDream,
                300
            );
    }


    [
        el.dreamDate,
        el.dreamTitle,
        el.dreamManifest,
        el.dreamAffect,
        el.dreamDayResidue,
        el.dreamAssociations,
        el.dreamCondensation,
        el.dreamDisplacement,
        el.dreamWishConflict,
        el.dreamInterpretation
    ].forEach(
        input => {
            input.addEventListener(
                "input",
                scheduleDreamSave
            );

            input.addEventListener(
                "change",
                scheduleDreamSave
            );
        }
    );


    el.backFromDreamEditor.addEventListener(
        "click",
        () => {
            saveCurrentDream();

            currentDreamId =
                null;

            renderDreamList();

            showScreen(
                screens.dreamList
            );
        }
    );


    el.deleteDreamButton.addEventListener(
        "click",
        () => {
            const item =
                currentDream();

            if (!item) {
                return;
            }

            if (
                !window.confirm(
                    "Traum löschen?"
                )
            ) {
                return;
            }

            state.dreams =
                state.dreams.filter(
                    dream =>
                        dream.id
                        !==
                        item.id
                );

            saveState();

            currentDreamId =
                null;

            renderDreamList();

            showScreen(
                screens.dreamList
            );
        }
    );


    el.dreamPdfButton.addEventListener(
        "click",
        () => {
            saveCurrentDream();

            const item =
                currentDream();

            if (!item) {
                return;
            }

            exportPrintableDocument(
                item.title.trim()
                ||
                "Traum",
                [
                    {
                        heading: "Datum",
                        text:
                            formatDate(
                                item.date
                            )
                    },
                    {
                        heading: "Manifester Traum",
                        text:
                            item.manifest
                    },
                    {
                        heading: "Affekte",
                        text:
                            item.affect
                    },
                    {
                        heading: "Tagesreste",
                        text:
                            item.dayResidue
                    },
                    {
                        heading: "Freie Assoziationen",
                        text:
                            item.associations
                    },
                    {
                        heading: "Verdichtung",
                        text:
                            item.condensation
                    },
                    {
                        heading: "Verschiebung",
                        text:
                            item.displacement
                    },
                    {
                        heading: "Wunsch / Konflikt",
                        text:
                            item.wishConflict
                    },
                    {
                        heading: "Deutung",
                        text:
                            item.interpretation
                    }
                ]
            );
        }
    );


    // ==================================================
    // FILM / LITERATUR LIBRARY
    // ==================================================

    function libraryState() {
        return state[
            reviewKind
        ];
    }


    function libraryEntries() {
        return libraryState().entries;
    }


    function libraryLabel() {
        return reviewKind
        ===
        "films"
            ? "Filme"
            : "Bücher";
    }


    function reviewLabel() {
        return reviewKind
        ===
        "films"
            ? "Film"
            : "Buch";
    }


    function openReviewLibrary(
        kind
    ) {
        reviewKind =
            kind;

        currentReviewFolderId =
            null;

        currentReviewEntryId =
            null;

        currentFolderEditId =
            null;

        el.reviewSortSelect.value =
            "manual";

        renderReviewLibrary();

        showScreen(
            screens.reviewLibrary
        );
    }


    function getEntry(id) {
        return (
            libraryEntries().find(
                item =>
                    item.id
                    ===
                    id
            )
            ??
            null
        );
    }


    function folderChildren(
        parentId
    ) {
        return libraryEntries()
            .filter(
                item =>
                    item.parentId
                    ===
                    parentId
            );
    }


    function currentFolder() {
        if (
            !currentReviewFolderId
        ) {
            return null;
        }

        return getEntry(
            currentReviewFolderId
        );
    }


    function folderPath(folderId) {
        const path = [];
        let currentId =
            folderId;

        const safety =
            new Set();

        while (currentId) {
            if (
                safety.has(
                    currentId
                )
            ) {
                break;
            }

            safety.add(
                currentId
            );

            const folder =
                getEntry(
                    currentId
                );

            if (
                !folder
                ||
                folder.type
                !==
                "folder"
            ) {
                break;
            }

            path.unshift(
                folder
            );

            currentId =
                folder.parentId;
        }

        return path;
    }


    function renderBreadcrumbs() {
        el.reviewBreadcrumbs.innerHTML =
            "";

        const root =
            document.createElement(
                "button"
            );

        root.type =
            "button";

        root.className =
            "breadcrumb-button";

        root.textContent =
            libraryLabel();

        root.addEventListener(
            "click",
            () => {
                currentReviewFolderId =
                    null;

                renderReviewLibrary();
            }
        );

        el.reviewBreadcrumbs.appendChild(
            root
        );

        folderPath(
            currentReviewFolderId
        ).forEach(
            folder => {
                const sep =
                    document.createElement(
                        "span"
                    );

                sep.className =
                    "breadcrumb-separator";

                sep.textContent =
                    "›";

                const button =
                    document.createElement(
                        "button"
                    );

                button.type =
                    "button";

                button.className =
                    "breadcrumb-button";

                button.textContent =
                    folder.title;

                button.addEventListener(
                    "click",
                    () => {
                        currentReviewFolderId =
                            folder.id;

                        renderReviewLibrary();
                    }
                );

                el.reviewBreadcrumbs.append(
                    sep,
                    button
                );
            }
        );
    }


    function sortedLibraryChildren() {
        const items =
            folderChildren(
                currentReviewFolderId
            );

        const mode =
            el.reviewSortSelect.value;

        if (
            mode
            ===
            "title"
        ) {
            return [...items].sort(
                (
                    a,
                    b
                ) =>
                    a.title.localeCompare(
                        b.title,
                        "de"
                    )
            );
        }

        if (
            mode
            ===
            "ratingDesc"
        ) {
            return [...items].sort(
                (
                    a,
                    b
                ) => {
                    if (
                        a.type
                        ===
                        "folder"
                        &&
                        b.type
                        !==
                        "folder"
                    ) {
                        return -1;
                    }

                    if (
                        b.type
                        ===
                        "folder"
                        &&
                        a.type
                        !==
                        "folder"
                    ) {
                        return 1;
                    }

                    return (
                        (b.rating ?? -1)
                        -
                        (a.rating ?? -1)
                    );
                }
            );
        }

        if (
            mode
            ===
            "ratingAsc"
        ) {
            return [...items].sort(
                (
                    a,
                    b
                ) => {
                    if (
                        a.type
                        ===
                        "folder"
                        &&
                        b.type
                        !==
                        "folder"
                    ) {
                        return -1;
                    }

                    if (
                        b.type
                        ===
                        "folder"
                        &&
                        a.type
                        !==
                        "folder"
                    ) {
                        return 1;
                    }

                    return (
                        (a.rating ?? 99)
                        -
                        (b.rating ?? 99)
                    );
                }
            );
        }

        return [...items].sort(
            (
                a,
                b
            ) =>
                Number(
                    a.order
                    ||
                    0
                )
                -
                Number(
                    b.order
                    ||
                    0
                )
        );
    }


    function renderReviewLibrary() {
        el.reviewLibraryTitle.textContent =
            libraryLabel();

        renderBreadcrumbs();

        const items =
            sortedLibraryChildren();

        el.reviewLibraryList.innerHTML =
            "";

        el.reviewLibraryEmpty.style.display =
            items.length === 0
                ? "block"
                : "none";

        const manual =
            el.reviewSortSelect.value
            ===
            "manual";

        items.forEach(
            (
                item,
                index
            ) => {
                const row =
                    document.createElement(
                        "div"
                    );

                row.className =
                    "library-row";

                if (
                    item.type
                    ===
                    "folder"
                ) {
                    row.classList.add(
                        "folder"
                    );
                }

                const main =
                    document.createElement(
                        "button"
                    );

                main.type =
                    "button";

                main.className =
                    "row-main-button";

                const title =
                    document.createElement(
                        "div"
                    );

                title.className =
                    "row-title";

                title.textContent =
                    item.title.trim()
                    ||
                    (
                        item.type
                        ===
                        "folder"
                            ? "Ordner"
                            : "Ohne Titel"
                    );

                const subtitle =
                    document.createElement(
                        "div"
                    );

                subtitle.className =
                    "row-subtitle";

                if (
                    item.type
                    ===
                    "folder"
                ) {
                    subtitle.textContent =
                        `${folderChildren(item.id).length} Einträge`;

                } else {
                    subtitle.textContent =
                        item.rating
                            ? `${item.rating}/10`
                            : "Keine Bewertung";
                }

                main.append(
                    title,
                    subtitle
                );

                main.addEventListener(
                    "click",
                    () => {
                        if (
                            item.type
                            ===
                            "folder"
                        ) {
                            currentReviewFolderId =
                                item.id;

                            renderReviewLibrary();

                        } else {
                            openReviewEditor(
                                item.id
                            );
                        }
                    }
                );

                row.appendChild(
                    main
                );

                if (
                    item.type
                    ===
                    "review"
                    &&
                    item.rating
                ) {
                    const rating =
                        document.createElement(
                            "span"
                        );

                    rating.className =
                        "library-rating";

                    rating.textContent =
                        item.rating;

                    row.appendChild(
                        rating
                    );
                }

                if (manual) {
                    const controls =
                        document.createElement(
                            "div"
                        );

                    controls.className =
                        "library-move-controls";

                    const up =
                        document.createElement(
                            "button"
                        );

                    up.type =
                        "button";

                    up.textContent =
                        "↑";

                    up.disabled =
                        index
                        ===
                        0;

                    up.addEventListener(
                        "click",
                        () => {
                            moveLibraryItem(
                                item.id,
                                -1
                            );
                        }
                    );

                    const down =
                        document.createElement(
                            "button"
                        );

                    down.type =
                        "button";

                    down.textContent =
                        "↓";

                    down.disabled =
                        index
                        ===
                        items.length
                        -
                        1;

                    down.addEventListener(
                        "click",
                        () => {
                            moveLibraryItem(
                                item.id,
                                1
                            );
                        }
                    );

                    controls.append(
                        up,
                        down
                    );

                    row.appendChild(
                        controls
                    );
                }

                if (
                    item.type
                    ===
                    "folder"
                ) {
                    const more =
                        document.createElement(
                            "button"
                        );

                    more.type =
                        "button";

                    more.className =
                        "library-more-button";

                    more.textContent =
                        "···";

                    more.addEventListener(
                        "click",
                        () => {
                            openFolderEditor(
                                item.id
                            );
                        }
                    );

                    row.appendChild(
                        more
                    );
                }

                el.reviewLibraryList.appendChild(
                    row
                );
            }
        );
    }


    function normalizeSiblingOrder(
        parentId
    ) {
        const siblings =
            folderChildren(
                parentId
            ).sort(
                (
                    a,
                    b
                ) =>
                    Number(
                        a.order
                        ||
                        0
                    )
                    -
                    Number(
                        b.order
                        ||
                        0
                    )
            );

        siblings.forEach(
            (
                item,
                index
            ) => {
                item.order =
                    index;
            }
        );
    }


    function nextOrder(
        parentId
    ) {
        const siblings =
            folderChildren(
                parentId
            );

        if (
            siblings.length
            ===
            0
        ) {
            return 0;
        }

        return (
            Math.max(
                ...siblings.map(
                    item =>
                        Number(
                            item.order
                            ||
                            0
                        )
                )
            )
            +
            1
        );
    }


    function moveLibraryItem(
        id,
        direction
    ) {
        const item =
            getEntry(id);

        if (!item) {
            return;
        }

        normalizeSiblingOrder(
            item.parentId
        );

        const siblings =
            folderChildren(
                item.parentId
            ).sort(
                (
                    a,
                    b
                ) =>
                    a.order
                    -
                    b.order
            );

        const index =
            siblings.findIndex(
                entry =>
                    entry.id
                    ===
                    id
            );

        const targetIndex =
            index
            +
            direction;

        if (
            targetIndex < 0
            ||
            targetIndex
            >=
            siblings.length
        ) {
            return;
        }

        const target =
            siblings[
                targetIndex
            ];

        const oldOrder =
            item.order;

        item.order =
            target.order;

        target.order =
            oldOrder;

        saveState();
        renderReviewLibrary();
    }


    el.backFromReviewLibrary.addEventListener(
        "click",
        () => {
            if (
                currentReviewFolderId
            ) {
                const folder =
                    currentFolder();

                currentReviewFolderId =
                    folder?.parentId
                    ??
                    null;

                renderReviewLibrary();
                return;
            }

            showScreen(
                screens.textsHub
            );
        }
    );


    el.reviewSortSelect.addEventListener(
        "change",
        renderReviewLibrary
    );


    // ==================================================
    // FOLDERS
    // ==================================================

    el.addFolderButton.addEventListener(
        "click",
        () => {
            currentFolderEditId =
                null;

            el.folderName.value =
                "";

            setError(
                el.folderError
            );

            el.deleteFolderButton.style.display =
                "none";

            showScreen(
                screens.folderEditor
            );

            setTimeout(
                () => {
                    el.folderName.focus();
                },
                0
            );
        }
    );


    function openFolderEditor(id) {
        const folder =
            getEntry(id);

        if (
            !folder
            ||
            folder.type
            !==
            "folder"
        ) {
            return;
        }

        currentFolderEditId =
            id;

        el.folderName.value =
            folder.title;

        setError(
            el.folderError
        );

        el.deleteFolderButton.style.display =
            "block";

        showScreen(
            screens.folderEditor
        );
    }


    el.backFromFolderEditor.addEventListener(
        "click",
        () => {
            currentFolderEditId =
                null;

            renderReviewLibrary();

            showScreen(
                screens.reviewLibrary
            );
        }
    );


    el.saveFolderButton.addEventListener(
        "click",
        () => {
            const name =
                el.folderName
                    .value
                    .trim();

            if (!name) {
                setError(
                    el.folderError,
                    "Name fehlt."
                );

                return;
            }

            if (
                currentFolderEditId
            ) {
                const folder =
                    getEntry(
                        currentFolderEditId
                    );

                if (!folder) {
                    return;
                }

                folder.title =
                    name;

                folder.updatedAt =
                    nowIso();

            } else {
                libraryEntries().push({
                    id: createId(),
                    type: "folder",
                    parentId:
                        currentReviewFolderId,
                    title: name,
                    rating: null,
                    summary: "",
                    interpretation: "",
                    review: "",
                    order:
                        nextOrder(
                            currentReviewFolderId
                        ),
                    createdAt:
                        nowIso(),
                    updatedAt:
                        nowIso()
                });
            }

            saveState();

            currentFolderEditId =
                null;

            renderReviewLibrary();

            showScreen(
                screens.reviewLibrary
            );
        }
    );


    function collectDescendantIds(
        folderId
    ) {
        const found =
            new Set();

        const processed =
            new Set();

        const queue =
            [folderId];

        while (
            queue.length
        ) {
            const current =
                queue.shift();

            if (
                processed.has(
                    current
                )
            ) {
                continue;
            }

            processed.add(
                current
            );

            found.add(
                current
            );

            libraryEntries()
                .filter(
                    item =>
                        item.parentId
                        ===
                        current
                )
                .forEach(
                    item => {
                        found.add(
                            item.id
                        );

                        if (
                            item.type
                            ===
                            "folder"
                        ) {
                            queue.push(
                                item.id
                            );
                        }
                    }
                );
        }

        return found;
    }


    el.deleteFolderButton.addEventListener(
        "click",
        () => {
            if (
                !currentFolderEditId
            ) {
                return;
            }

            if (
                !window.confirm(
                    "Ordner und alle enthaltenen Einträge löschen?"
                )
            ) {
                return;
            }

            const ids =
                collectDescendantIds(
                    currentFolderEditId
                );

            libraryState().entries =
                libraryEntries().filter(
                    item =>
                        !ids.has(
                            item.id
                        )
                );

            saveState();

            if (
                ids.has(
                    currentReviewFolderId
                )
            ) {
                currentReviewFolderId =
                    null;
            }

            currentFolderEditId =
                null;

            renderReviewLibrary();

            showScreen(
                screens.reviewLibrary
            );
        }
    );


    // ==================================================
    // REVIEWS
    // ==================================================

    el.addReviewEntryButton.addEventListener(
        "click",
        () => {
            currentReviewEntryId =
                null;

            el.reviewEntryTitle.value =
                "";

            el.reviewEntryRating.value =
                "";

            el.reviewEntrySummary.value =
                "";

            el.reviewEntryInterpretation.value =
                "";

            el.reviewEntryReview.value =
                "";

            setError(
                el.reviewEntryError
            );

            renderReviewFolderOptions(
                currentReviewFolderId
            );

            el.deleteReviewEntryButton.style.display =
                "none";

            el.reviewEditorHeading.textContent =
                reviewLabel();

            showScreen(
                screens.reviewEditor
            );

            setTimeout(
                () => {
                    el.reviewEntryTitle.focus();
                },
                0
            );
        }
    );


    function allFolders() {
        return libraryEntries()
            .filter(
                item =>
                    item.type
                    ===
                    "folder"
            );
    }


    function folderDisplayPath(
        folder
    ) {
        return folderPath(
            folder.id
        )
        .map(
            item =>
                item.title
        )
        .join(
            " › "
        );
    }


    function renderReviewFolderOptions(
        selectedId
    ) {
        el.reviewEntryFolder.innerHTML =
            "";

        const root =
            document.createElement(
                "option"
            );

        root.value =
            "";

        root.textContent =
            "Ohne Ordner";

        el.reviewEntryFolder.appendChild(
            root
        );

        allFolders()
            .sort(
                (
                    a,
                    b
                ) =>
                    folderDisplayPath(a)
                        .localeCompare(
                            folderDisplayPath(b),
                            "de"
                        )
            )
            .forEach(
                folder => {
                    const option =
                        document.createElement(
                            "option"
                        );

                    option.value =
                        folder.id;

                    option.textContent =
                        folderDisplayPath(
                            folder
                        );

                    el.reviewEntryFolder.appendChild(
                        option
                    );
                }
            );

        el.reviewEntryFolder.value =
            selectedId
            ??
            "";
    }


    function openReviewEditor(id) {
        const item =
            getEntry(id);

        if (
            !item
            ||
            item.type
            !==
            "review"
        ) {
            return;
        }

        currentReviewEntryId =
            id;

        el.reviewEditorHeading.textContent =
            reviewLabel();

        el.reviewEntryTitle.value =
            item.title;

        el.reviewEntryRating.value =
            item.rating
                ? String(
                    item.rating
                )
                : "";

        el.reviewEntrySummary.value =
            item.summary;

        el.reviewEntryInterpretation.value =
            item.interpretation;

        el.reviewEntryReview.value =
            item.review;

        renderReviewFolderOptions(
            item.parentId
        );

        setError(
            el.reviewEntryError
        );

        el.deleteReviewEntryButton.style.display =
            "block";

        showScreen(
            screens.reviewEditor
        );
    }


    el.backFromReviewEditor.addEventListener(
        "click",
        () => {
            currentReviewEntryId =
                null;

            renderReviewLibrary();

            showScreen(
                screens.reviewLibrary
            );
        }
    );


    function reviewFormData() {
        const ratingValue =
            el.reviewEntryRating.value;

        return {
            title:
                el.reviewEntryTitle
                    .value
                    .trim(),
            rating:
                ratingValue === ""
                    ? null
                    : Number(
                        ratingValue
                    ),
            summary:
                el.reviewEntrySummary
                    .value
                    .trim(),
            interpretation:
                el.reviewEntryInterpretation
                    .value
                    .trim(),
            review:
                el.reviewEntryReview
                    .value
                    .trim(),
            parentId:
                el.reviewEntryFolder.value
                ||
                null
        };
    }


    el.saveReviewEntryButton.addEventListener(
        "click",
        () => {
            const data =
                reviewFormData();

            if (!data.title) {
                setError(
                    el.reviewEntryError,
                    "Titel fehlt."
                );

                el.reviewEntryTitle.focus();
                return;
            }

            if (
                data.rating
                !==
                null
                &&
                (
                    data.rating < 1
                    ||
                    data.rating > 10
                )
            ) {
                setError(
                    el.reviewEntryError,
                    "Bewertung muss zwischen 1 und 10 liegen."
                );

                return;
            }

            if (
                currentReviewEntryId
            ) {
                const item =
                    getEntry(
                        currentReviewEntryId
                    );

                if (!item) {
                    return;
                }

                const oldParentId =
                    item.parentId;

                Object.assign(
                    item,
                    data,
                    {
                        updatedAt:
                            nowIso()
                    }
                );

                if (
                    oldParentId
                    !==
                    data.parentId
                ) {
                    item.order =
                        nextOrder(
                            data.parentId
                        );
                }

            } else {
                libraryEntries().push({
                    id: createId(),
                    type: "review",
                    ...data,
                    order:
                        nextOrder(
                            data.parentId
                        ),
                    createdAt:
                        nowIso(),
                    updatedAt:
                        nowIso()
                });
            }

            saveState();

            currentReviewEntryId =
                null;

            renderReviewLibrary();

            showScreen(
                screens.reviewLibrary
            );
        }
    );


    el.deleteReviewEntryButton.addEventListener(
        "click",
        () => {
            if (
                !currentReviewEntryId
            ) {
                return;
            }

            if (
                !window.confirm(
                    "Eintrag löschen?"
                )
            ) {
                return;
            }

            libraryState().entries =
                libraryEntries().filter(
                    item =>
                        item.id
                        !==
                        currentReviewEntryId
                );

            saveState();

            currentReviewEntryId =
                null;

            renderReviewLibrary();

            showScreen(
                screens.reviewLibrary
            );
        }
    );


    el.reviewPdfButton.addEventListener(
        "click",
        () => {
            const data =
                reviewFormData();

            if (!data.title) {
                setError(
                    el.reviewEntryError,
                    "Titel fehlt."
                );

                return;
            }

            exportPrintableDocument(
                data.title,
                [
                    {
                        heading:
                            "Bewertung",
                        text:
                            data.rating
                                ? `${data.rating}/10`
                                : ""
                    },
                    {
                        heading:
                            "Zusammenfassung",
                        text:
                            data.summary
                    },
                    {
                        heading:
                            "Deutung",
                        text:
                            data.interpretation
                    },
                    {
                        heading:
                            "Bewertung",
                        text:
                            data.review
                    }
                ]
            );
        }
    );


    // ==================================================
    // INITIALIZATION
    // ==================================================

    applyTheme();
    saveState();
    renderMiniSession();

})();
